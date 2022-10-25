const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then(result => {
        res.render('blogs/index', {title: 'All Blogs', blogs: result})
    })
    .catch(err => console.log(err))
};


const blog_details = (req, res) => { //set id as a request param 
    const id = req.params.id; //extract id from the request msg
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', {title: 'Blog Details', blog: result})
        })
        .catch(res.status(404).render('404', { title: 'Blog not found' }))
};


const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
};


const blog_create_post = (req, res) => { //handle post requests from /blogs
    const blog = new Blog(req.body)
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => console.log(err))
};


const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs'}); //after delete, redirect to /blogs
        })
        .catch(err => console.log(err));
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}