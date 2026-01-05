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
    
    // One thing you have to realize is when you're dealing with backend development is anytime a user can change a the data like in this case and you have to be aware of that and also be aware of what you're doing with this data because it's possible someone could put like a SQL query in the URL (/api/posts?limit=DELETE FROM..) and really screw things up. That's called SQL injection
    // The type of data that you expect should be the only type of data that can be accepted, so in this case we want a number and in particular a number that is positive because its a limit.


    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        // if there's a limit, return posts till the set limit only
        res.json(posts.slice(0, limit));
    } else {
        // if there is no limit then return all the posts
        res.json(posts);
    }
    // isNaN is a function that will returns true if the value is not a valid number and false if the value is a valid number
})
// Test the following URL to see the result of API
    // 1. /api/posts?limit=1
    // 2. /api/posts?limit=2
    // 3. /api/posts?limit=100
    // 4. /api/posts


// Get a single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.find(post => post.id === id));
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

// req.query extracts the query string from the URL and parses it into a JavaScript object with key–value pairs, where all values are strings.