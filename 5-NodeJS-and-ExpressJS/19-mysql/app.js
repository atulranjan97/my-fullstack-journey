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


/*
const airbnbDb = require('./util/database-util');

airbnbDb.execute("SELECT * FROM homes").then(([rows, fields]) => {
  console.log(rows);
})

    This line executes a SQL query to fetch data from the 'homes' table in our database
    Let's break it down step by step:

    1. airbnbDb.execute() - This method executes a SQL query on our database
    2. "SELECT * FROM homes" - This is the SQL query:
      - SELECT means we want to retrieve data
      - * means we want all columns
      - FROM homes specifies we want data from the 'homes' table
    3. .then(([rows, fields]) => {...}) - This handles what happens after we get the data:
      - .then() is used because database operations are asynchronous (take time to complete)
      - [rows, fields] uses destructuring to get our data:
        - rows contains the actual data from the table (array of home objects)
        - fields contains information about the table columns
    4. console.log(rows) - Prints the retrieved data to the console

    airbnbDb.execute("SELECT * FROM homes") returns a promise(an async operation), jab data aayega tab `then` method ke ander ka callback chalega.

    This is the data we would receive which is array of arrays where each array contains an object. Here first array is the row data we fetched and we destructured it in our callback function that we passed in `.then` 


      [
        [
          {
            id: 1,
            houseName: 'GharSe',
            price: 2200,
            location: 'Jaipur, Rajasthan',
            rating: 4.6,
            photoUrl: '/images/home-1.avif',
            description: 'Kick back and relax in this stylish, centrally located apartment. Perfect for couples or solo travelers, this cozy spot features a comfy queen bed, fully equipped kitchen, and a chill living area with Netflix-ready TV. Walking distance to cafes, shops, and public transport. Fast Wi-Fi makes it great for work or play!'
          }
        ],
        [
          `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
          `houseName` LONGTEXT NOT NULL,
          `price` DOUBLE NOT NULL,
          `location` LONGTEXT NOT NULL,
          `rating` DOUBLE NOT NULL,
          `photoUrl` LONGTEXT,
          `description` LONGTEXT NOT NULL
        ]
      ]

*/

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

