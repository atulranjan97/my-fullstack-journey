const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');
// const hostController = require('../controllers/hostController');


authRouter.get('/login', authController.getLogin);
authRouter.post('/login', authController.postLogin);

authRouter.post('/logout', authController.postLogout);

exports.authRouter = authRouter;
// 01:23:00