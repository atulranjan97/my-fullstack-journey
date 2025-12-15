const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');
// const hostController = require('../controllers/hostController');


authRouter.get('/login', authController.getLogin);
authRouter.post('/login', authController.postLogin);

authRouter.post('/logout', authController.postLogout);

authRouter.get('/signup', authController.getSignup);
authRouter.post('/signup', authController.postSignup);

exports.authRouter = authRouter;
// 01:23:00