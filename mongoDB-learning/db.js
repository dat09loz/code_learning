const { MongoClient } = require('mongodb')

let dbConn;

//export stuffs
module.exports = {//extablish the connection to the database, get that database
    connectToDb: (cb) => { //callback function to run after the connection is established
        MongoClient.connect('mongodb://localhost:27017/bookstore')// connect to the database
            .then((client) => { // what to do when completed
                dbConn = client.db() //store the connection
                return cb()
            })
            .catch((err) => { //error
                console.log('error');
                return cb(err)
            })
    },
    getDb: () => dbConn //return the connection value
}