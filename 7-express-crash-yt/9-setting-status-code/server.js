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
        // res.json(posts.slice(0, limit));
        // when you do res.json, it's by default send a status code of 200

        // But it's a good practice to specify status code of 200 explicitely even though you don't have to. It just make it more readable/clear
        res.status(200).json(posts.slice(0, limit));
    } else {
        // res.status(200);
        // you can send just status code as response without any content 

        // But we do want to send the content as well
        res.status(200).json(posts);
    }
    // isNaN is a function that will returns true if the value is not a valid number and false if the value is a valid number
})

// Get a single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404).json({msg: `A post with the id of ${id} was not found`});
    } else {
        res.status(200).json(post);
    }
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


// status code:
// 200 means success
// 300 means redirect
// 400 means client error 
// 500 means server error
