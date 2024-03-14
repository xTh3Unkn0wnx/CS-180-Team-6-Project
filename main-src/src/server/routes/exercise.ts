import express, { Request, Response } from 'express';
import {Exercise} from "../models/exercise.model";
import mongoose from 'mongoose';

const router = express.Router();

router.route('/').get((req:Request, res:Response) => {
    const userId = req.query.userId;
    if (!userId){
        return res.status(400).json('Error: userId is required');
    }
    try {
    Exercise.find({user: userId})
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) { 
        res.status(400).json('Error: ' + err);
    }
})

router.route('/add').post((req:Request, res:Response) => {
    const {user, exerciseName, reps, sets, duration, date, intensity, muscleGroups, description } = req.body;
    if (!user || typeof user !== "string" || user === ""){
        return res.status(400).json('Error: userId is required');
    }
    try {
        const newExercise = new Exercise({
            user : new mongoose.Types.ObjectId(user),
            exerciseName,
            reps,
            sets,
            duration,
            date,
            intensity,
            muscleGroups,
            description,
        })
    
        newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch((err: string) => res.status(400).json('Error: ' + err));
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
    
})

router.route('/delete/:id').delete((req:Request, res:Response) => { 
    const exerciseId = req.query.id;
    if (!exerciseId || typeof exerciseId !== "string" || exerciseId === ""){
        return res.status(400).json('Error: userId is required');
    }
    try {
        Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch((err: string) => res.status(400).json('Error: ' + err));
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }

})

router.route('/:id').delete((req:Request, res:Response) => { 
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch((err: string) => res.status(400).json('Error: ' + err));
})

export default router;