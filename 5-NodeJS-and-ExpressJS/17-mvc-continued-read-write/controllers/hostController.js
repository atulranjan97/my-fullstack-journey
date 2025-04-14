const Home = require('../models/Home');
// humne class `Home` import kiya hai model folder ke `Home.js` file se

exports.getAddHome = (req, res, next) => {
    console.log('\nReceived GET request on "/add-home"');
    res.render('add-home', {pageTitle: 'Add Home'});
}

exports.postAddHome = (req, res, next) => {
    console.log('\nReceived POST request on "/add-home"');

    const {houseName, price, location, rating, photoUrl} = req.body;
    const newHome = new Home(houseName, price, location, rating, photoUrl);

    newHome.save(err => {
        if (err) {
            res.redirect('/');
        } else {
            res.render('home-added', {pageTitle: 'Home Hosted'});
        }
    });
    // agar err type ka object aya hai toh iska matlab registered homes thik se save nahi ho payein hai, file operation me kuch-na-kuch error aa gayi hai, usko directly redirect kardo homepage('/') par.
    // Agar error nahi aayi hai and sbkuch successfully hua hai toh `home-added` page ko render kar diya with data.
}

