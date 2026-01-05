const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;

const app = express();


// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]
// let's just pretend that this is in the database

// Get all posts
app.get('/api/posts', (req, res) => {
    // if we make a request to the URL /api/posts?limit=2
    console.log(req.query);     // {limit: '2'}

    // if we make a request to the URL /api/posts?limit=2&sort=desc
    console.log(req.query);     // {limit: '2', sort: 'desc'}
    

    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    // JavaScript executes the expression first, then return exits the function and stops further code from running.

    res.status(200).json(posts);
})
// isNaN is a function that will returns true if the value is not a valid number and false if the value is a valid number



// Get a single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `A post with the id of ${id} was not found`});
    } 
    // JavaScript executes the expression first, then return exits the function and stops further code from running.

    res.status(200).json(post);
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));



// status code:
// 200 means success
// 300 means redirect
// 400 means client error 
// 500 means server error
