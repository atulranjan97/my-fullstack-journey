const Favourite = require('../models/favourite');
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
    console.log('\nReceived GET request on "/"');

    Home.find().then(registeredHomes => {
        res.render('store/index', {homes: registeredHomes, pageTitle: 'Humara airbnb'});
    })
}

exports.getHomes = (req, res, next) => {
    console.log('\nReceived GET request on "/"');

    Home.find().then(registeredHomes => {
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
    Favourite.find().then(favouriteIds => {
        console.log('favouriteIds: ', favouriteIds);
        Home.find().then(registeredHomes => {
            favouriteIds = favouriteIds.map(favouriteId => favouriteId.homeId.toString());
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
    
    const fav = new Favourite({homeId});
    // We pass homeId as an object {homeId: homeId} because:
    // 1. The Favourite model schema expects an object with a homeId property
    // 2. When property name matches variable name, we can use object shorthand {homeId}
    // 3. This matches the schema structure defined in models/favourite.js
    // 4. Mongoose will validate that the object matches the schema structure
    // 5. It's more explicit and self-documenting than passing just the value
    
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

    // we can't use findByIdAndDelete here
    // The issue is we're using findByIdAndDelete with homeId
    // But we need to find the Favourite document where homeId matches
    // Not where the Favourite document's _id matches
    Favourite.findOneAndDelete({homeId: homeId}).then(() => {
        res.redirect('/favourites');
    })
    .catch(err => {
        console.log('Error while removing from favourites ', err);
        res.redirect('/favourites');
    });
}
// 17:44