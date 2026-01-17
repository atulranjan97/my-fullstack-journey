// Core Modules
const path = require('path');

// External Modules
const express = require("express");   // npm i express
const bodyParser = require("body-parser");    // npm i body-parser
const mongoose = require('mongoose');   // npm i mongoose
const session = require('express-session');   // npm i express-session
const mongodb_session = require('connect-mongodb-session'); // npm i connect-mongodb-session (this package returns a function)


// Local Module
const { hostRouter } = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorController = require('./controllers/errorController');
const { authRouter } = require('./routers/authRouter');


const MongoDbStore = mongodb_session(session);
const MONGO_DB_URL = process.env.MONGO_URI;

const sessionStore = new MongoDbStore ({
  uri: MONGO_DB_URL,
  collection: 'sessions',
})

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
//  This tells Express to use EJS as the default template engine for rendering dynamic views.

app.set('views', 'views');   
// This sets the directory where Express should look for template files (.ejs files).


app.use(express.static(path.join(rootDir, 'public')));   //  /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/23-cookies-with-sessions/public
app.use(bodyParser.urlencoded({ extended: true }));

// session middleware setup
app.use(session({
  secret: 'MERN LIVE BATCH',    // Secret key used to sign the session ID cookie and encrypt session data (encryption key for session)
  resave: false,    // Forces session to be saved back to the session store, even if not modified (false dene ka matlab session ko un request par save na karein jisme session modified nahi hua hai)
  saveUninitialized: true,    // Forces the session that is "uninitialized" to be saved to the store 
  store: sessionStore,
  // agar hum koi aur tarah ka bhi store bana rahe hote eg, cassandra, mysql etc, uska sessionStore banane ka tareeka different hoga but hum finally jo session ko pass karte vo store banakar session store hi pass kar rahe hote.
}));   
// session(...) returns a middleware

// ab agar server changes ki vajah se restart hoga to uske baad bhi hum agar page refresh karenge toh logout nahi honge jo tab ho rahe the jab session ko local machine ke memory me save kar rahe the, aisa isiliye kyunki is baar jo session hai vo mongodb ke ander store hona shuru ho gaya hai. Toh jab bhi hum cookie lekar jaa rahe hai ye cookie ki value verify karne mongodb ke pass jaa raha hai.  

app.use(storeRouter);   
app.use('/host', (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect('/login');
  }
  next();
})

app.use('/host', hostRouter);   
app.use(authRouter);

app.use(errorController.get404);


const PORT = process.env.PORT;



mongoose.connect(MONGO_DB_URL).then(() => {
  console.log('Successfully connected to DB');

  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);
  });
});
