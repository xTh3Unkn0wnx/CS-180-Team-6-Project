import express, { Request, Response } from 'express';
import {User} from "../models/user.model.js"

const router = express.Router();

router.route('/').get((req:Request, res:Response) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req:Request, res:Response) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;
    const dateOfBirth = Date.parse(req.body.dateOfBirth);

    const newUser = new User({
        username,
        password,
        email,
        name,
        dateOfBirth,
    })

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

export default router;