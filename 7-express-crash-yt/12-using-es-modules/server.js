// To make all files of this project an es module
    // go into package.json and add the following script
        // "type": "modules", 

// now change the import and export syntax according to es modules

// const express = require('express');
import express from 'express';

// const path = require('path');
import path from 'path';

// const posts = require('./routes/posts');     // .js extension is option in commonjs module
import posts from './routes/posts.js'   // .js extension is necessary in es module

const PORT = process.env.PORT || 8000;

const app = express();


// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have prefix  /api/posts  in the url again

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));




