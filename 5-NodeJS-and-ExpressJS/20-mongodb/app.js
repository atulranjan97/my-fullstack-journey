// Core Modules
const path = require('path');

// External Modules
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorController = require('./controllers/errorController');
const { mongoConnect } = require('./util/database-util');


const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
//  This tells Express to use EJS as the default template engine for rendering dynamic views.

app.set('views', 'views');   
// This sets the directory where Express should look for template files (.ejs files).


app.use(express.static(path.join(rootDir, 'public')));   //  /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/16-mvc/public

app.use(bodyParser.urlencoded({ extended: true }));
// This middleware parses incoming requests with URL-encoded payloads (form data)
// bodyParser.urlencoded() returns middleware that only parses urlencoded bodies
// The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format,
// allowing for a JSON-like experience with URL-encoded
// Without this middleware, you would not be able to access form data in req.body
// Example: When a form is submitted with <form method="POST">, this middleware parses the data
// and makes it available in your routes as req.body.fieldName

app.use(storeRouter);   
app.use('/host', hostRouter);   

app.use(errorController.get404);

// Define the port number that our server will listen on
const PORT = process.env.PORT;

// mongoConnect is a function that establishes connection with MongoDB database
// It takes a callback function that will only execute after successful database connection
mongoConnect(() => {
  // app.listen() starts the Express server
  // First argument (PORT) specifies which port to listen on
  // Second argument is a callback function that runs once server starts successfully
  app.listen(PORT, () => {
    // Log a message to confirm server is running and show the URL
    console.log(`Server running at: http://localhost:${PORT} \n`);
  });
});

// This approach ensures proper initialization order:
// 1. First connects to MongoDB database
// 2. Only after successful database connection, starts the Express server
// 3. If database connection fails, server won't start (see error handling in mongoConnect)
// This prevents scenarios where server is running but can't connect to database

