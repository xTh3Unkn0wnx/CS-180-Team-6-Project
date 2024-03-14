import express, { Request, Response } from 'express';
import {User} from "../models/user.model";
import { Meal } from '../models/meal.model';
import { Exercise } from '../models/exercise.model';
import mongoose from 'mongoose';

const router = express.Router();

router.route('/').get((req:Request, res:Response) => {
    let user = req.query.userId;
    if (!user) {
        return res.status(400).json({ error: "userId required" });
    }
    User.find({ _id: user })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

// Register a new user
router.route('/register').post((req:Request, res:Response) => {
    let {username, password, email, name, dateOfBirth} = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ error: "Username, password and email required" });
    }

    if (!dateOfBirth || dateOfBirth > Date.now()) {
        dateOfBirth = Date.now();
     };

    const newUser = new User({
        username,
        password,
        email,
        name,
        dateOfBirth,
    })

    newUser.save()
    .then(() => {
        res.json({message: 'User added!', userId: newUser._id})
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

// Login a user
router.route('/login').post((req: Request, res: Response) => {
    // const username = req.body.username;
    const {email, username, password} = req.body;

    // if (!email || !password) {
    //     return res.status(400).json({ error: "Email and password required" });
    // }

    if (username==="" && email==="") {
        return res.status(400).json({ error: "Username or email required" });
    }

    if ((username==="" || email==="") || password==="" ) {
        return res.status(400).json({ error: "Username or email required" });
    }

    // Find user by username
    if (username){
        User.findOne({ username: username })
    .then(user => {
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Check password
        if (user.password === password) {
            res.json({ msg: "Login successful", userId: user._id, loggedIn: true});
        } else {
            res.status(400).json({ msg: "Invalid credentials" });
        }
    })
    .catch(err => res.status(500).json('Error: ' + err));
    }
    //Find user by email
    else{
        User.findOne({ email: email })
    .then(user => {
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        // Check password
        if (user.password === password) {
            res.json({ msg: "Login successful", userId: user._id, loggedIn: true});
        } else {
            res.status(400).json({ msg: "Invalid credentials" });
        }
    })
    .catch(err => res.status(500).json('Error: ' + err));
    }
})

// Delete a user
router.route('/delete/:id').delete( async (req:Request, res:Response) => { 
    const userId = req.params.id;
    if (!userId || typeof userId !== "string" || userId === ""){
        return res.status(400).json('Error: userId is required');
    }
    // Start a session for transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Delete the user
        await User.findByIdAndDelete(userId).session(session);

        // Delete all exercises and meals that reference the user
        await Exercise.deleteMany({ user: userId }).session(session);
        await Meal.deleteMany({ user: userId }).session(session);

        // If everything goes well, commit the changes
        await session.commitTransaction();

        return res.json('User and related exercises and meals deleted.');
    } catch (err) {
        // If anything goes wrong, abort the transaction
        await session.abortTransaction();

        return res.status(400).json('Error: ' + err);
    } finally {
        // End the session
        session.endSession();
    }
})

export default router;