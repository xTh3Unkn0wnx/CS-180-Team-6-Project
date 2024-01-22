import express, { Request, Response } from 'express';
import {Template} from "../models/exercise.model.js"

const router = express.Router();

router.route('/').get((req:Request, res:Response) => {
    Template.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req:Request, res:Response) => {
    const exerciseName = req.body.exerciseName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Template({
        exerciseName,
        description,
        duration,
        date,
    })

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

export default router;