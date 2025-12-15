// Core Modules
const path = require('path');

// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// Local Module
const { hostRouter } = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorController = require('./controllers/errorController');
const { authRouter } = require('./routers/authRouter');


const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
//  This tells Express to use EJS as the default template engine for rendering dynamic views.

app.set('views', 'views');   
// This sets the directory where Express should look for template files (.ejs files).


app.use(express.static(path.join(rootDir, 'public')));   //  /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/22-cookies-and-sessions/public
app.use(bodyParser.urlencoded({ extended: true }));

// Read the cookie using syntax and define a middleware to set a value to the request object
app.use((req, res, next) => {
  console.log(req.get('Cookie'));
  // console.log(req.get('Cookie').split('=')[1] === 'true');
  if (req.get('Cookie')) {
    req.isLoggedIn = req.get('Cookie').split('=')[1] === 'true';
  } else {
    res.cookie('isLoggedIn', false);
  }
  next();
})

app.use(storeRouter);   
app.use('/host', (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect('/login');
  }
  next();
})

app.use('/host', hostRouter);   
app.use(authRouter);

app.use(errorController.get404);


const PORT = 3000;


const MONGO_DB_URL = "mongodb+srv://atulranjan97:jin97kMongoDb*@atul-cluster.l17ingm.mongodb.net/airbnb?retryWrites=true&w=majority&appName=atul-cluster";

mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);
  });
});
