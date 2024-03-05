import express, { Request, Response } from 'express';
import {Exercise} from "../models/exercise.model";
import mongoose from 'mongoose';

const router = express.Router();

router.route('/').get((req:Request, res:Response) => {
    const userId = req.query.userId;
    if (!userId){
        return res.status(400).json('Error: userId is required');
    }
    Exercise.find({user: userId})
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req:Request, res:Response) => {
    const exerciseName = req.body.exerciseName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const user = req.query.userId;
    const intensity = req.body.intensity;
    const muscleGroups = req.body.muscleGroups;
    if (!user || typeof user !== "string" || user === ""){
        return res.status(400).json('Error: userId is required');
    }

    const newExercise = new Exercise({
        userid : new mongoose.Types.ObjectId(user),
        exerciseName,
        description,
        duration,
        date,
        intensity,
        muscleGroups,
    })

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch((err: string) => res.status(400).json('Error: ' + err));
})

export default router;