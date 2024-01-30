import express, { Request, Response } from 'express';
import {Meal} from "../models/meal.model.js"

const router = express.Router();

router.route('/:userId').get((req:Request, res:Response) => {
    Meal.find()
    .then(meals => res.json(meals))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add/:userId').post((req:Request, res:Response) => {
    const mealName = req.body.mealName;
    const description = req.body.description;
    const calories = Number(req.body.calories);
    const date = Date.parse(req.body.date);
    const user = req.params.userId;
    const type = req.body.type;

    const newMeal = new Meal({
        user,
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