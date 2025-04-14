// External Module
const express = require('express');

const storeRouter = express.Router();

const { registeredHomes } = require('./hostRouter');


storeRouter.get("/", (req, res, next) => {
    console.log('\nReceived GET request on "/"');
    console.log(registeredHomes);

    // res.sendFile(path.join(rootDir, 'views', 'index.html'));

    res.render('index', {homes: registeredHomes, pageTitle: 'Humara airbnb'});
    /*
        1. `res.render()` is used to generate HTML dynamically before sending it to the browser.
        2. The second argument ({homes: registeredHomes, pageTitle: 'Humara airbnb'}) provides data that the template can use.
        3. Works with templating engines like EJS, Pug (Jade), Handlebars, etc.

        `.render()` is a method that processes a view template (like index.ejs, index.pug, etc.) and sends the result to the client.

        'index'
            1. This is the name of the view/template file (e.g., index.ejs, index.hbs, etc.) to be rendered.
            2. Express looks for this file in the views directory (by default).

        {homes: registeredHomes, pageTitle: 'Humara airbnb'}
            -> This is an object containing data to be passed to the view.
            -> The view can dynamically display this data using template syntax (e.g., <%= pageTitle %> in EJS).
    */

    // jo humne `res.render()` call kiya hai ye toh function hum expressJS ka call kar rahien hai but expressJS ko hum already bata chuke hai ki humne ek 'view engine' laga diya hai 'ejs' type ka, toh ye apne aap samajh jayega ki hum yaha render me jo bhi naam de rahein hai vo humein `views` folder ke ander dhoondna hai, yaha humare ejs ka naam hai index.ejs jo views folder mein hai. Pehle argument mein ejs file ka naam likhna hai without extension and second argument me jo bhi variable ya object hum pass karna chah rahien hai, un object ki humko list deni hai and then ye object hum apne template ke ander directly use kar sakte hai. 
});

module.exports = storeRouter;
