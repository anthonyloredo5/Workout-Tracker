const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: {
        type: {
            String,
            trim: true,
            require: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            require: "Enter an exercise name"
        },
        duration: {
            type: Number,
            trim: true,
            require: "Enter an exercise duration"
        },
        weight: {
            type: Number,
            trim: true,
            require: "Enter an exercise weight"
        },
        reps: {
            type: Number,
            trim: true,
            require: "Enter a number of reps"
        },
        sets: {
            type: Number,
            trim: true,
            require: "Enter a number of sets"
        },
        distance: {
            type: Number,
            trim: true,
            require: "Enter a distance traveled"
        }
    }
})

module.exports = workoutSchema;