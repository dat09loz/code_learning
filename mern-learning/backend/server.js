require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express(); //create an express app

//middleware
app.use(express.json())// pass the data from the request body and attach it to the req handler

app.use((req, res, next) => {//log path and req method
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts/', workoutRoutes) //when fire requests to /api/workouts, we use workoutRoutes to handle routes

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => { //after connecting to db, listen to request on port 4000
        app.listen(process.env.PORT, () => { console.log('connected to db, listen to port', process.env.PORT)});
    }).catch(e => console.log(e))


