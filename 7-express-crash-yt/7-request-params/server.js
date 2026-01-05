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
    res.json(posts);
})

// Get a single post
app.get('/api/posts/:id', (req, res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    // console.log(typeof req.params.id);  // string

    const id = parseInt(req.params.id);
    // console.log(posts.find(post => post.id === id))
    // console.log(posts.filter(post => post.id === id))

    res.json(posts.find(post => post.id === id));
    // res.json(posts.filter(post => post.id === id));
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

