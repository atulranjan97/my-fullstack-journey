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


const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
//  This tells Express to use EJS as the default template engine for rendering dynamic views.

app.set('views', 'views');   
// This sets the directory where Express should look for template files (.ejs files).


app.use(express.static(path.join(rootDir, 'public')));   //  /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/16-mvc/public

app.use(bodyParser.urlencoded({ extended: true }));
app.use(storeRouter);   
app.use('/host', hostRouter);   

app.use(errorController.get404);

const mongoose = require('mongoose');

const PORT = 3000;


// MongoDB connection URL with authentication credentials
// Format: mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?<options>
// - username: atulranjan97 
// - cluster: airbnb.nboh2yb
// - database: airbnb
// - options: retryWrites and w=majority for reliability
// - appName: Identifies this application in MongoDB logs
const MONGO_DB_URL = "mongodb+srv://atulranjan97:jin97kMongoDb*@airbnb.nboh2yb.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Airbnb";

// Connect to MongoDB using Mongoose
// mongoose.connect() returns a promise that resolves when connection is established
mongoose.connect(MONGO_DB_URL).then(() => {
  // Only start the Express server after successfully connecting to MongoDB
  // This ensures our app has database access before accepting requests
  // The app uses this connection for:
  // - Storing home listings (see models/Home.js)
  // - Managing favorites (see models/favourite.js) 
  // - CRUD operations in hostController.js and storeController.js
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);
  });
});

// mongodb+srv://atulranjan97:jin97kMongoDb*@airbnb.nboh2yb.mongodb.net/?retryWrites=true&w=majority&appName=Airbnb 