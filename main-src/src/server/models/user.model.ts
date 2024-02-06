import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // trim whitespace
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, // trim whitespace
        minlength: 3
    },
    name: {
        type: String,
        required: false,
        trim: true, // trim whitespace
    },
    dateOfBirth: {
        type: Date,
        required: false,
    },
}, {
    timestamps: true,
})

export const User = mongoose.model('User', userSchema);