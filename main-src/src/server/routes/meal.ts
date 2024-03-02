import express, { Request, Response } from 'express';
import {Meal} from "../models/meal.model"
import mongoose from 'mongoose';

const router = express.Router();

router.route('/').get((req:Request, res:Response) => {
    const userId = req.query.userId;
    if (!userId){
        return res.status(400).json('Error: userId is required');
    }
    Meal.find({user: userId})
    .then(meals => res.json(meals))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req:Request, res:Response) => {
    // const mealName = req.body.mealName;
    // const description = req.body.description;
    // const calories = Number(req.body.calories);
    // const date = Date.parse(req.body.date);
    // const user = req.query.user;
    // const type = req.body.type;
    const {userId, mealName, description, calories, type, date,} = req.body;
    if (!date || date === ""){
        let date = Date.now();
    }
    if (!userId || userId === ""){
        return res.status(400).json('Error: userId is required');
    }

    const newMeal = new Meal({
        user: new mongoose.Types.ObjectId(userId),
        mealName,
        description,
        calories,
        date,
        type,
    })

    newMeal.save()
    .then(() => res.json('Meal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

export default router;