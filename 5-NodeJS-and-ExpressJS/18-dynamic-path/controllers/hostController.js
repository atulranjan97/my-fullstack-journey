const Home = require('../models/Home');
// humne class `Home` import kiya hai model folder ke `Home.js` file se

exports.getAddHome = (req, res, next) => {
    console.log('\nReceived GET request on "/add-home"');
    res.render('host/edit-home', {editing: false, pageTitle: 'Host Your Home'});
}

exports.postAddHome = (req, res, next) => {
    console.log('\nReceived POST request on "/add-home"');

    const {houseName, price, location, rating, photoUrl} = req.body;
    const newHome = new Home(houseName, price, location, rating, photoUrl);

    newHome.save(err => {
        if (err) {
            res.redirect('/');
        } else {
            res.render('host/home-added', {pageTitle: 'Home Hosted'});
        }
    });
    // agar err type ka object aya hai toh iska matlab registered homes thik se save nahi ho payein hai, file operation me kuch-na-kuch error aa gayi hai, usko directly redirect kardo homepage('/') par.
    // Agar error nahi aayi hai and sbkuch successfully hua hai toh `home-added` page ko render kar diya with data.
}

exports.postEditHome = (req, res, next) => {
    console.log('\nReceived POST request on "/edit-home"');
    const {id, houseName, price, location, rating, photoUrl} = req.body;
    const newHome = new Home(houseName, price, location, rating, photoUrl);
    newHome.id = id;
    
    newHome.save(err => {
        if (err) {
            console.log('Error while updating home', err);
        } else {
            // res.render('host/host-homes', {homes: registeredHomes, pageTitle: 'Host Homes'});
            res.redirect('/host/host-homes');
        }
    });
}

exports.getHostHomes = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('host/host-homes', {homes: registeredHomes, pageTitle: 'Host Homes'});
    })
}

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    // agar path ke ander variable hai to `req.param.homeId` karenge

    const editing = req.query.editing === 'true';  
    // agar query ke ander variable hai to `req.query.editing` karenge.
    // `req.query.editing` always returns a string 

    if (!editing) {
        console.log('Editing flag not set properly');
        return res.redirect('/host/host-homes');
    }

    Home.findById(homeId, home => {
        if (!home) {
            console.log('Home not found for editing');
            return res.redirect('/host/host-homes');
        }

        console.log(homeId, editing, home);
        res.render('host/edit-home', {home: home, editing: editing, pageTitle: 'Edit Your Home'});
    })


}

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log('Came to delete ', homeId);
    Home.deleteById(homeId, err => {
        if (err) {
            console.log('Error occurred while deleting home: ', err);
        }
        res.redirect('/host/host-homes');
    })
}