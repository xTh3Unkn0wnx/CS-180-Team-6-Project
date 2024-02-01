import express, { Request, Response } from 'express';
import {Exercise} from "../models/exercise.model.js"

const router = express.Router();

router.route('/:userId').get((req:Request, res:Response) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add/:userId').post((req:Request, res:Response) => {
    const exerciseName = req.body.exerciseName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const user = req.params.userId;
    const intensity = req.body.intensity;
    const muscleGroups = req.body.muscleGroups;

    const newExercise = new Exercise({
        user,
        exerciseName,
        description,
        duration,
        date,
        intensity,
        muscleGroups,
    })

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

export default router;