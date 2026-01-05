// External Module
const express = require('express');
const hostRouter = express.Router();
const hostController = require('../controllers/hostController');


hostRouter.get('/add-home', hostController.getAddHome);
hostRouter.post('/add-home', hostController.postAddHome);
// `hostRouter` do type ke path manage karta hai, (GET) '/add-home' aur (POST) '/add-home', aur jab bhi iske paas request aa jati hai next control flow controller ko pass kar deta hai.

// Default Export
// module.exports = hostRouter;

// Named Export
exports.hostRouter = hostRouter;

