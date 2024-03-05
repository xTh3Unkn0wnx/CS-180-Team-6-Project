import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mealSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    mealName: {type: String, require: true},
    description: {type: String, required: true},
    calories: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    type: {type: String,
        default: 'Meal',
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Meal']
    },
    urlImage: {type: String, required: false}
}, {
    timestamps: true,
})

export const Meal = mongoose.model('Meal', mealSchema);