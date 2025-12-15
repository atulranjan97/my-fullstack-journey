// Core Modules
const path = require('path');

// External Modules
const express = require("express");   // npm i express
const bodyParser = require("body-parser");    // npm i body-parser
const mongoose = require('mongoose');   // npm i mongoose
const session = require('express-session');   // npm i express-session
const mongodb_session = require('connect-mongodb-session'); // npm i connect-mongodb-session (This package exports a FUNCTION, not a class)

// Local Module
const { hostRouter } = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorController = require('./controllers/errorController');
const { authRouter } = require('./routers/authRouter');



// You need to CALL this function(mongodb-session) and pass it the session module
const MongoDbStore = mongodb_session(session);
/* Why does it need the `session` parameter?
    The `connect-mongodb-session` package needs access to the `express-session` module to integrate properly. It's like saying "Hey, I need to know which session system you're using so I can work with it."
*/
const MONGO_DB_URL = "mongodb+srv://atulranjan97:jin97kMongoDb*@atul-cluster.l17ingm.mongodb.net/airbnb?retryWrites=true&w=majority&appName=atul-cluster";

// NOW MongoDBStore is the actual class you can use
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

// Session configuration
// 1. Session middleware placement: Put app.use(session({...})) BEFORE your routes but AFTER body parsing middleware.
// 2. The session object: Once configured, `req.session` becomes available in all your routes.
// 3. Setting session data: Just assign to `req.session.propertyName = value`
// 4. Reading session data: Access with `req.session.propertyName`
// 5. Destroying sessions: Use `req.session.destroy()` for logout
app.use(session({
  secret: 'my-super-secret-key-change-this-in-production',    // Secret key used to sign the session ID cookie and encrypt session data (encryption key for session)
  resave: false,    // Whether to save the session back to storage even if it wasn't modified during the request. Usually set to `false`. 
  saveUninitialized: true,    // Forces the session that is "uninitialized" to be saved to the store 
  store: sessionStore,
  // agar hum koi aur tarah ka bhi store bana rahe hote eg, cassandra, mysql etc, uska sessionStore banane ka tareeka different hoga but hum finally jo session ko pass karte vo store banakar session store hi pass kar rahe hote.
}));   
// session(...) returns a middleware
// Session vs Cookie: The session ID is stored in a cookie, but session data is stored server-side
// Persistence: By default, sessions are stored in memory and disappear when server restarts
// Security: Always use a strong, random secret in production
// HTTPS: Set cookie.secure: true when using HTTPS

// ab agar server changes ki vajah se restart hoga to uske baad bhi hum agar page refresh karenge toh logout nahi honge jo tab ho rahe the jab session ko local machine ke memory me save kar rahe the, aisa isiliye kyunki is baar jo session hai vo mongodb ke ander store hona shuru ho gaya hai. Toh jab bhi hum cookie lekar jaa rahe hai ye cookie ki value verify karne mongodb ke pass jaa raha hai.  

app.use(storeRouter);   

app.use('/host', (req, res, next) => {
  // console.log('req.session.isLoggedIn :', req.session.isLoggedIn);
  if (!req.session.isLoggedIn) {
    return res.redirect('/login');
  }
  next();
})

app.use('/host', hostRouter);   

app.use(authRouter);

app.use(errorController.get404);


const PORT = 3000;



mongoose.connect(MONGO_DB_URL).then(() => {
  console.log('Successfully connected to DB');
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);
  });
});
