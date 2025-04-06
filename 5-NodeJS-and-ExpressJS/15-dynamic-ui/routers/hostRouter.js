// External Module
const express = require('express');

const hostRouter = express.Router();

hostRouter.get('/add-home', (req, res, next) => {
    console.log('\nReceived GET request on "/add-home"');
    // res.sendFile(path.join(rootDir, 'views', 'add-home.html'));
    res.render('add-home', {pageTitle: 'Add Home'});
});

const registeredHomes = [];
// Ques: const keyword ke sath `registeredHomes` ki value kaise change ho rahi hai har `registeredHomes.push(req.body)` par ?   
// Ans: hum registeredHomes ka reference change nahi kar rahein hai, const ka matlab hota hai ki object ko re-assign nahi kar sakte lekin hum yaha object ko re-assign karne ki koshish nahi kar rahien hai, hum object jis array ko refer kar raha hai us array ke ander values add karne ki koshish kar rahien hai and ye karna allowed hai. `const` ka matlab bs ye hai ki mai is `registeredHomes` ko dubara se ek naya array of objects assign nahi kar sakta. 

hostRouter.post('/add-home', (req, res, next) => {
    console.log('\nReceived POST request on "/add-home"');
    registeredHomes.push(req.body);
    // res.sendFile(path.join(rootDir, 'views', 'home-added.html'));
    res.render('home-added', {pageTitle: 'Home Hosted'});
    // ye render tabhi use kar sakte hai jab koi templating engine use kar rahe ho, templating engine ki jo configuration hai vo hum `app.js` me de chuke hai (app.set('view engine', 'ejs') and app.set('views', 'views')) means ki bhai ejs hum templating engine bana rahe hai and views saare views wale folder ke ander milne wale hai, toh usko pata hai ki jo bhi naam humne diya hai vo usko views folder me jaake dhoondna hai  
});

// Default Export
// module.exports = hostRouter;

// Named Export
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;


// Airbnb mein `host` vo hai jo is web pr apna house as product list karega.
// `Host` se related sare path ki handling hum is `hostRouter.js` file me kar rahein hai.