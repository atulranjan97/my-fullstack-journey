const Favourite = require('../models/favourite');
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
    console.log('\nReceived GET request on "/"');

    Home.fetchAll().then(registeredHomes => {
        res.render('store/index', {homes: registeredHomes, pageTitle: 'Humara airbnb'});
    })
}

exports.getHomes = (req, res, next) => {
    console.log('\nReceived GET request on "/"');

    Home.fetchAll().then(registeredHomes => {
        // console.log(registeredHomes);
        res.render('store/homes', {homes: registeredHomes, pageTitle: 'Humara airbnb'});
    });
}

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then(home => {
        if (!home) {
            console.log('Home not found');
            return res.redirect('/homes');
        }
        // console.log('Came to detail page', homeId, home);
        res.render('store/home-detail', {home: home,pageTitle: 'Home detail'});
    })}

exports.getFavourites = (req, res, next) => {
    Favourite.fetchAll().then(favouriteIds => {
        // console.log('favouriteIds: ', favouriteIds);
        Home.fetchAll().then(registeredHomes => {
            favouriteIds = favouriteIds.map(favouriteId => favouriteId.homeId);
            // console.log('favouriteIds: ', favouriteIds);
            // console.log('registeredHomes: ', registeredHomes);

            const favouriteHomes = registeredHomes.filter(home => favouriteIds.includes(home._id.toString()))
            res.render('store/favourites', {homes: favouriteHomes, pageTitle: 'Favourites'});
        })
    })
}

exports.postAddFavourites = (req, res, next) => {
    // console.log('Came to add favourites: ',req.body);
    const homeId = req.body.id;
    const fav = new Favourite(homeId);
    fav.save().then(() => {
        res.redirect('/favourites');
    })
    .catch(err => {
        console.log('Error while adding to favourites: ', err);
        res.redirect('/favourites');
    });
}

exports.postRemoveFavourites = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log('Came to remove favourites for homeId: ', homeId);
    Favourite.deleteById(homeId).then(() => {
        res.redirect('/favourites');
    })
    .catch(err => {
        console.log('Error while removing from favourites ', err);
        res.redirect('/favourites');
    });
}