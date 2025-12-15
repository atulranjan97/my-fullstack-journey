// Import the Home model from models/Home.js
// This gives us access to the Home schema and methods for database operations
const Home = require('../models/Home');

// Handler for GET request to /add-home route
// This displays the form for adding a new home listing
exports.getAddHome = (req, res, next) => {
    console.log('\nReceived GET request on "/add-home"');
    // Render the edit-home view, with editing=false to indicate this is a new home
    // The view will show an empty form since we're not passing any home data
    res.render('host/edit-home', {editing: false, pageTitle: 'Host Your Home', isLoggedIn: req.session.isLoggedIn});
}

// Handler for POST request to /add-home route
// This processes the form submission for adding a new home
exports.postAddHome = (req, res, next) => {
    console.log('\nReceived POST request on "/add-home"');

    // Extract all the form fields from req.body using object destructuring
    // This matches the fields defined in our Home schema (see models/Home.js)
    const {houseName, price, location, rating, photoUrl, description} = req.body;

    // Create a new Home document using our mongoose model
    // The object we pass matches our schema definition
    // We can use shorthand notation when property name matches variable name
    const newHome = new Home({houseName, price, location, rating, photoUrl, description});

    // Save the new home to MongoDB
    // save() returns a promise, so we use .then() to handle the response
    // On successful save, redirect user to the host-homes page
    newHome.save().then(() => {
        res.redirect('/host/host-homes');
    });
}

// Handler for POST request to /edit-home route
// This processes form submissions for editing existing homes
exports.postEditHome = (req, res, next) => {
    console.log('\nReceived POST request on "/edit-home"');
    // Get all form data including the home's ID
    const {id, houseName, price, location, rating, photoUrl, description} = req.body;

    // First find the existing home by ID
    Home.findById(id).then(existingHome => {
        // If no home found with that ID, redirect back to host-homes
        if (!existingHome) {
            console.log('Home not found for editing');
            return res.redirect('/host/host-homes');
        }
        // Update all fields of the existing home
        existingHome.houseName = houseName;
        existingHome.price = price;
        existingHome.location = location;
        existingHome.rating = rating;
        existingHome.photoUrl = photoUrl;
        existingHome.description = description;
        // Save the updated home document
        return existingHome.save();
    }).finally(() => {
        // Always redirect back to host-homes page, whether update succeeded or failed
        return res.redirect('/host/host-homes');
    })
}

// Handler for GET request to /host-homes route
// This displays all homes hosted by the current user
exports.getHostHomes = (req, res, next) => {
    // Find all homes in the database
    // In a real app, we'd filter by user ID to show only their homes
    Home.find().then(registeredHomes => {
        // Render the host-homes view, passing the array of homes
        res.render('host/host-homes', {homes: registeredHomes, pageTitle: 'Host Homes', isLoggedIn: req.session.isLoggedIn});
    })
}

// Handler for GET request to /edit-home route
// This displays the form for editing an existing home
exports.getEditHome = (req, res, next) => {
    // Get home ID from URL parameter (e.g., /edit-home/123)
    const homeId = req.params.homeId;

    // Get editing flag from query string (e.g., ?editing=true)
    // Convert string 'true' to boolean
    const editing = req.query.editing === 'true';  

    // If editing flag not set properly, redirect back
    if (!editing) {
        console.log('Editing flag not set properly');
        return res.redirect('/host/host-homes');
    }

    // Find the home by ID
    Home.findById(homeId).then(home => {
        // If no home found, redirect back
        if (!home) {
            console.log('Home not found for editing');
            return res.redirect('/host/host-homes');
        }

        console.log(homeId, editing, home);
        // Render edit form with the home's current data
        res.render('host/edit-home', {home: home, editing: editing, pageTitle: 'Edit Your Home', isLoggedIn: req.session.isLoggedIn});
    })
}

// Handler for POST request to delete a home
// The homeId is passed in the URL parameter
exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log('Came to delete ', homeId);
    // Use mongoose's findByIdAndDelete to remove the home
    // After deletion, redirect back to host-homes page
    Home.findByIdAndDelete(homeId).then(() => {
        res.redirect('/host/host-homes');
    });
}