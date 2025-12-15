const Favourite = require('../models/favourite');
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
    console.log('\nReceived GET request on "/"');
    console.log('req.session: ', req.session);

    Home.find().then(registeredHomes => {
        res.render('store/index', {homes: registeredHomes, pageTitle: 'Humara airbnb', isLoggedIn: req.session.isLoggedIn});
    })
}

exports.getHomes = (req, res, next) => {
    console.log('\nReceived GET request on "/"');

    Home.find().then(registeredHomes => {
        // console.log(registeredHomes);
        res.render('store/homes', {homes: registeredHomes, pageTitle: 'Humara airbnb', isLoggedIn: req.session.isLoggedIn});
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
        res.render('store/home-detail', {home: home,pageTitle: 'Home detail', isLoggedIn: req.session.isLoggedIn});
    })}


exports.getFavourites = (req, res, next) => {
    Favourite.find().populate("homeId").then(favouriteIdHomes => {
    // In the getFavourites function, we will fetch all favourite documents from the favourites collection
    // We will use the populate method to replace the homeId field in each document with the actual home document
    // That is, we will fetch the home document corresponding to each homeId and replace homeId with the fetched home
    // This is done using the populate method which takes a string argument specifying the field to populate
    // The populate method returns a promise that resolves to the populated documents
    // We then map over the populated documents and extract the home documents
    // We will pass these home documents to the favourites view
        console.log('favouriteIdHomes', favouriteIdHomes);
        const favouriteHomes = favouriteIdHomes.map(favouriteIdHome => favouriteIdHome.homeId);
        // favouriteIdHomes is an array of objects where each object has a homeId field that is populated with a home document
        // We will map over this array and extract the home documents
        // favouriteHomes is an array of home documents
        res.render('store/favourites', {homes: favouriteHomes, pageTitle: 'Favourites', isLoggedIn: req.session.isLoggedIn});
        // We will pass this array to the favourites view
    })
}


exports.postAddFavourites = (req, res, next) => {
    // console.log('Came to add favourites: ',req.body);
    const homeId = req.body.id;
    
    const fav = new Favourite({homeId});
    // We pass homeId as an object {homeId: homeId} because:
    // 1. The Favourite model schema expects an object with a homeId property
    // 2. When property name matches variable name, we can use object shorthand {homeId}
    // 3. This matches the schema structure defined in models/favourite.js
    // 4. Mongoose will validate that the object matches the schema structure
    // 5. It's more explicit and self-documenting than passing just the value
    
    fav.save()
    .then(() => {
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

    // we can't use findByIdAndDelete here
    // The issue is we're using findByIdAndDelete with homeId
    // But we need to find the Favourite document where homeId matches
    // Not where the Favourite document's _id matches
    Favourite.findOneAndDelete({homeId})    // {homeId: homeId} is same as {homeId}
    .then(() => {
        res.redirect('/favourites');
    })
    .catch(err => {
        console.log('Error while removing from favourites ', err);
        res.redirect('/favourites');
    });
}
// 34.00