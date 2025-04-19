// Import mongoose library which helps us interact with MongoDB
const mongoose = require('mongoose');

// Create a new schema for the Favourite model
// Schema defines the structure and rules for our documents
const favouriteSchema = new mongoose.Schema({
    // Define the homeId field
    homeId: {
        type: mongoose.Schema.Types.ObjectId,
        // This field will store MongoDB ObjectId (like a unique identifier)

        ref: 'Home',
        // 'ref' creates a relationship with the 'Home' model
        // This allows us to populate homeId with actual home data when needed

        required: true,
        // 'required: true' means this field must be provided

        unique: true
        // 'unique: true' ensures no duplicate homeIds can be saved
    }
})

// Create and export the Favourite model
// 'Favourite' will be the collection name in MongoDB (automatically pluralized to 'favourites')
// The model provides methods to interact with the favourites collection
module.exports = mongoose.model('Favourite', favouriteSchema);