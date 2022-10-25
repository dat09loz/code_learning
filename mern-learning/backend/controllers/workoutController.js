const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

//get 1 workouts
const getWorkout = async (req, res) => {
    const {id} = req.params //:id dynamic property
    if (!mongoose.Types.ObjectId.isValid(id)) {//check if this is the valid id (24 hex)
        return res.status(404).json({err: 'not a valid id'})
    }
    const workout = await Workout.findById(id)
    if (!workout) {//if workout does not exist
        return res.status(404).json({err: 'no such workout'})
    }

    res.status(200).json(workout);
}

//get 1 workout
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({})
    res.status(200).json(workout)
}


//create new workout
const createWorkout = async (req, res) => {
    const {title,reps,loads} = req.body
    try {
        const workout = await Workout.create({title, reps, loads}) //create a new doc object
        res.status(200).json(workout) //status code
    } catch (err) {
        res.status(400).json({err: err.message}) //status code
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params //:id dynamic property
    if (!mongoose.Types.ObjectId.isValid(id)) {//check if this is the valid id (24 hex)
        return res.status(404).json({err: 'not a valid id'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if (!workout) {//if workout does not exist
        return res.status(404).json({err: 'no such workout'})
    }
    res.status(200).json({message: "workout deleted" + workout});
}

//update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params //:id dynamic property
    if (!mongoose.Types.ObjectId.isValid(id)) {//check if this is the valid id (24 hex)
        return res.status(404).json({err: 'not a valid id'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body //spread props
    })


    if (!workout) {//if workout does not exist
        return res.status(404).json({err: 'no such workout'})
    }
    res.status(200).json({message: "workout update" + workout});
}



module.exports = { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout 
}