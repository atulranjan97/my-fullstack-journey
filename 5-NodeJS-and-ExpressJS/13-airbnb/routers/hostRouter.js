// Core Module
const path = require('path');

// External Module
const express = require('express');

const rootDir = require('../util/path-util');

const hostRouter = express.Router();

hostRouter.get('/add-home', (req, res, next) => {
  // res.sendFile(path.join(__dirname, 'views', 'add-home.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-home.html'));
  // the html file sends POST request to the same path '/host/add-home'
});

hostRouter.post('/add-home', (req, res, next) => {
    console.log(req.body);
    // res.sendFile(path.join(__dirname, 'views', 'home-added.html'));
    res.sendFile(path.join(rootDir, 'views', 'home-added.html'));
});

module.exports = hostRouter;

// Airbnb mein `host` vo hai jo is web pr apna house as product list karega.
// `Host` se related sare path ki handling hum is `hostRouter.js` file me kar rahein hai.