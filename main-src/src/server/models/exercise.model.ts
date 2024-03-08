import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    exerciseName: {type: String, require: true},
    duration: {type: Number, required: true},
    reps: {type: Number, required: true},
    sets: {type: Number, required: true},
    date: {type: Date, required: true},
    intensity: {type: Number, default: 1, enum: [1, 2, 3, 4, 5]},
    muscleGroups: {type: String},
    description: {type: String},
}, {
    timestamps: true,
})

export const Exercise = mongoose.model('Excercise', exerciseSchema);
export default Exercise;
