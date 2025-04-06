// External Module
const express = require('express');

const storeRouter = express.Router();

const { registeredHomes } = require('./hostRouter');


storeRouter.get("/", (req, res, next) => {
    console.log('\nReceived GET request on "/"');
    console.log(registeredHomes);

    // res.sendFile(path.join(rootDir, 'views', 'index.html'));

    res.render('index', {homes: registeredHomes, pageTitle: 'Humara airbnb'});
    // jo humne `res.render()` call kiya hai ye toh function hum expressJS ka call kar rahien hai but expressJS ko hum already bata chuke hai ki humne ek 'view engine' laga diya hai 'ejs' type ka, toh ye apne aap samajh jayega ki hum yaha render me jo bhi naam de rahein hai vo humein `views` folder ke ander dhoondna hai, yaha humare ejs ka naam hai index.ejs jo views folder mein hai. Pehle argument mein ejs file ka naam likhna hai without extension and second argument me jo bhi variable ya object hum pass karna chah rahien hai, un object ki humko list deni hai and then ye object hum apne template ke ander directly use kar sakte hai. 
});

module.exports = storeRouter;
