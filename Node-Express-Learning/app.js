//! express app
//! view engine

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//connect to mongoDB

//express app
const app = express(); //invoke express app

//connect to mongoDB then listen for requests
const dbURI = process.env.MONGODB_URI; //!remember to specify collection to push data
mongoose.connect(dbURI) //async method: takes some time to finish
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');


//*middleware and static files
app.use(express.static('public')); //made this folder available to the browser
app.use(express.urlencoded({extended: true})); // take url encoded data and pass it into an object
app.use(morgan('dev'));
app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path:', req.path);
//     console.log('methods:', req.method);
    res.locals.path = req.path;
    next();
});

//routes
app.get('/', (req, res) => {//response to the homepage
    res.redirect('/blogs'); //redirect to blogs page
});

//blog routes
app.use('/blogs', blogRoutes); // 

app.get('/about', (req, res) => {//response to the about page
    res.render('about', { title: 'About' }); 
});

//* 404 page
app.use((req, res) => {//this function should be at the bottom of the file
    res.render('404', { title: '404' });
});

