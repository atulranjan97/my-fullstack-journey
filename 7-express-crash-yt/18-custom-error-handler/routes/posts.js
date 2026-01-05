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
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    // isNaN is a function that will returns true if the value is not a valid number and false if the value is a valid number

    res.status(200).json(posts);
})


// Get a single post
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        // error.status = 404;
        return next(error);
    } 

    res.status(200).json(post);
})

// Create new post
router.post('/', (req, res, next) => {
    console.log(req.body);

    const newPost = {
        id: posts.length + 1, // in reality, you'd be adding it to a database and most of the time database is going to give you the id automatically
        title:  req.body.title
    }

    if (!newPost.title) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }
     
    posts.push(newPost);    // now obiviously this new post is not gonna persist, if I restart the server it's gonna just go away because it's not being put in the database
    res.status(201).json(posts);
    // 201 means successful and something was created
})

// Update Post
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    // `Array.prototype.find()` returns the first matching element by reference, meaning it points to the same object stored in the array, so any changes made to the returned object will also affect the original object in the array unless you explicitly create a copy. 

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    } 
    
    console.log(req.body);
    post.title = req.body.title;
    res.status(201).json(posts);
});
// put is normally what we use for updating, you can also use patch but we prefer put though


// Delete Post
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    } 

    console.log(req.body);

    posts = posts.filter(post => post.id !== id);   // here we're overwriting the posts array that's why we used let keyword to define the array (important)
    res.status(201).json(posts);
})

// So, we now have a full CRUD API (create, read, update and delete)
// Obviously in real world instead of doing this kind of stuff we would be working with a database and we would use some kind of ORM for instace if we're using mongodb as our database there's an ORM called Mongoose and it has methods like find, delete things like that and you would be finding and deleting from the database rather than from just the hard-coded array like we're doing here. Infact you'd have less code because we have to write more JS to deal with this hard-coded array than we would to just use a few methods with Mongoose and if you're using a SQL database then Sqlite is really a popular ORM for node.js

// module.exports = router;
export default router;
