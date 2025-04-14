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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT} \n`);
});

