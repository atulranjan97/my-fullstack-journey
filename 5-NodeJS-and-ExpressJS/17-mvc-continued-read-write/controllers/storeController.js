const Home = require('../models/Home');

exports.getHome = (req, res, next) => {
    console.log('\nReceived GET request on "/"');

    Home.fetchAll(registeredHomes => {
        console.log(registeredHomes);
        res.render('index', {homes: registeredHomes, pageTitle: 'Humara airbnb'});
    });

}
// CommonJS named export