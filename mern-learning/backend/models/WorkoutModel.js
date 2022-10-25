const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({//create a new schema
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    loads: {
        type: Number,
        required: true
    }
}, { timestamps: true }) 

module.exports = mongoose.model('Workout', workoutSchema) //collection name workouts (all lower case with 's' at the end)