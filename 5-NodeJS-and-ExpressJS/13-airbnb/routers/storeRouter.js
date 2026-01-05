// Core Modules
const path = require('path');

// External Module
const express = require('express');

const rootDir = require('../util/path-util');

const storeRouter = express.Router();
// express.Router() is used to split routes into separate, clean modules.


storeRouter.get("/", (req, res, next) => {
    // relative path
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    // __dirname:  /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/13-airbnb/routers

    // absolute path
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
    // notice we use `res.sendFile` instead of `res.send` to send the html file.
    //  rootDir:  /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/13-airbnb
    // This line is used in Node.js to get the directory(path) of the main (entry) file/project of the application:
});
// html se related sari files hum `views` naam ke folder me daal rahein hote hai. Ye ek general programming convention hai.

module.exports = storeRouter;

// Airbnb mein `user` vo hai jo is web app pr house book karne aaya hai.
// `User` se related sare path ki handling hum is `storeRouter.js` file me kar rahein hai.