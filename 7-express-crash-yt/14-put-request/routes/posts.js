// const express = require('express');
import express from 'express';

const router = express.Router();

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]
// let's just pretend that this is in the database

// Get all posts
router.get('/', (req, res) => {
    // if we make a request to the URL /api/posts?limit=2
    console.log(req.query);     // {limit: '2'}

    // if we make a request to the URL /api/posts?limit=2&sort=desc
    console.log(req.query);     // {limit: '2', sort: 'desc'}
    

    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    // isNaN is a function that will returns true if the value is not a valid number and false if the value is a valid number

    res.status(200).json(posts);
})
// instead of using get method of app because obviously we don't have access to app anymore that's being defined in the server.js, we are not gonna use the router
// so anytime we create new routes, we are going to be using the router instead and also you have to export the router at the bottom


// Get a single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `A post with the id of ${id} was not found`});
    } 

    res.status(200).json(post);
})

// Create new post
router.post('/', (req, res) => {
    console.log(req.body);

    const newPost = {
        id: posts.length + 1, // in reality, you'd be adding it to a database and most of the time database is going to give you the id automatically
        title:  req.body.title
    }

    if (!newPost.title) {
        return res.status(400).json({msg: 'Please include a title'});
    }
     
    posts.push(newPost);    // now obiviously this new post is not gonna persist, if I restart the server it's gonna just go away because it's not being put in the database
    res.status(201).json(posts);
    // 201 means successful and something was created
})

// Update Post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    // `Array.prototype.find()` returns the first matching element by reference, meaning it points to the same object stored in the array, so any changes made to the returned object will also affect the original object in the array unless you explicitly create a copy. 

    if (!post) {
        return res.status(404).json({msg: `A post with the id of ${id} was not found`});
    } 
    
    console.log(req.body);
    post.title = req.body.title;
    res.status(201).json(posts);
});
// put is normally what we use for updating, you can also use patch but we prefer put though

// module.exports = router;
export default router;
