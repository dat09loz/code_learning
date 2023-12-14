const express = require('express');
const { connectToDb, getDb } = require('./db');

// init app and middleware
const app = express();

//db connection
let db;
connectToDb(err => {
    if(!err) {
        app.listen(3000, () => {
            console.log('listening on port 3000');
        });    
        db = getDb();
    }
});

//routes
app.get('/books', (req, res) => {
    let books = [];
    //execute commands
    db.collection('books')
        .find() //cursor toArray forEach
        .sort({author : 1}) 
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch((err) => {
            res.status(500).json({err: 'could not fetch the document'})
        })
});