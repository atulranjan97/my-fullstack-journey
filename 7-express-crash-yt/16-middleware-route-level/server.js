// Here we are going to see how we can get data from request body

// const express = require('express');
import express from 'express';

// const path = require('path');
import path from 'path';

// const posts = require('./routes/posts');     // .js extension is option in commonjs module
import posts from './routes/posts.js'   // .js extension is necessary in es module

const PORT = process.env.PORT || 8000;

const app = express();


// Body parser middleware
app.use(express.urlencoded({extended: false}));

// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have prefix  /api/posts  in the url again

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));




