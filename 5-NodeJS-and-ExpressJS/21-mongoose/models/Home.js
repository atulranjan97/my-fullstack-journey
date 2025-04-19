// Import mongoose to create Schema and Model
// Mongoose provides a straight-forward, schema-based solution to model your application data
const mongoose = require('mongoose');

// Create a new Schema for Home
// Schema defines the structure of the document, default values, validators, etc.
const homeSchema = new mongoose.Schema({
    // houseName field is required and must be a String
    // required: true means this field must be provided when creating a new document
    houseName: {type: String, required: true},
    
    // price field is required and stored as String
    // We store price as String to handle currency symbols and formatting
    // In real applications, you might want to store this as Number
    price: {type: String, required: true},
    
    // location field is required and must be a String
    // This could be address, city, or any location identifier
    location: {type: String, required: true},
    
    // rating field is required and must be a Number
    // Used in views to display star ratings
    // Number type allows for mathematical operations if needed
    rating: {type: Number, required: true}, 
    
    // photoUrl field is optional (no required flag)
    // Stores the URL/path to the home's photo
    photoUrl: String,
    
    // description field is optional
    // Allows for detailed text description of the property
    description: String
});

// Export the model so it can be used in other files
// mongoose.model() takes two arguments:
// 1. 'Home' - the name of the model (will be converted to collection name 'homes')
// 2. homeSchema - the Schema to use for this model
module.exports = mongoose.model('Home', homeSchema);

// Important Notes:
// - This model is used in hostController.js for CRUD operations
// - When we call new Home({...}), mongoose creates a new document based on this schema
// - Mongoose automatically adds _id field of type ObjectId if not specified
// - Collection name in MongoDB will be 'homes' (lowercase and plural of 'Home')
// - The schema ensures data consistency and provides built-in type casting
// - We can add more fields later like userId for authentication, timestamps, etc.
// - This model supports methods like:
//   * Home.find() - to find all homes
//   * Home.findById() - to find one home by ID
//   * Home.findByIdAndDelete() - to delete a home
//   * instance.save() - to save a home document