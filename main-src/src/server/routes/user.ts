import express, { Request, Response } from 'express';
import {User} from "../models/user.model"

const router = express.Router();

router.route('/').get((req:Request, res:Response) => {
    let user = req.query.userId;
    if (!user) {
        return res.status(400).json({ error: "userId required" });
    }
    User.find({ _id: user })
    .then((users: User[]) => res.json(users))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
})

// Register a new user
router.route('/register').post((req:Request, res:Response) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    let name = req.body.name;
    let dateOfBirth = Date.parse(req.body.dateOfBirth);

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

export default router;