const express = require('express');
const path = require('path');
const posts = require('./routes/posts');
const PORT = process.env.PORT || 8000;

const app = express();


// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have '/api/posts' there again

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


// so now let's move the routes to the seperate file because you can only imagine if you have a bunch of resources like posts, users, categories and then you have bunch of routes for each resource then this file can get filled up pretty quickly so you're usually going to have a seperate files for your different resources routes. 
// let's create a folder in the route and we'll call it routes and let's create a file called posts.js. 
// In this posts.js we are going to be using the express router
