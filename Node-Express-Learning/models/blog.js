const mongoose = require('mongoose');
const Schema = mongoose.Schema; //defines the structure of the document

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
}, {timestamps:true}); //autogenerate timestamp property

//*create a model
const Blog = mongoose.model('Blog', blogSchema); //name the model for finding collections in the future, use schema for this model
module.exports = Blog;
