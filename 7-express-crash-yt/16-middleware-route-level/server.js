// Here we are going to see how we can get data from request body

// const express = require('express');
import express from 'express';

// const path = require('path');
import path from 'path';

// const posts = require('./routes/posts');     // .js extension is option in commonjs module
import posts from './routes/posts.js'   // .js extension is necessary in es module

const PORT = process.env.PORT || 8000;

const app = express();

// so in order to get the body data we actually need to add a couple lines of middleware. We don't have to install anything, earlier we used to have to install a seperate body parser package but now it's just included with express

// Body parser middleware
// app.use(express.json()) -> this will take care of being able to submit raw json but again we also want to be able to use URL encoded data so we need to add one more line app.use(express.urlencoded({extended: false})), so that will allow us to send form data
app.use(express.urlencoded({extended: false}));

// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have prefix  /api/posts  in the url again

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));




