// Import mongoose to create Schema and Model
// Mongoose provides a straight-forward, schema-based solution to model your application data
const mongoose = require('mongoose');
const Favourite = require('./favourite');

// Create a new Schema for Home
// Schema defines the structure of the document, default values, validators, etc.
// _id is automatically added by mongoose.
const homeSchema = new mongoose.Schema({
    houseName: {type: String, required: true},
    // houseName field is required and must be a String
    // required: true means this field must be provided when creating a new document
    
    price: {type: String, required: true},
    // price field is required and stored as String
    // We store price as String to handle currency symbols and formatting
    // In real applications, you might want to store this as Number
    
    location: {type: String, required: true},
    // location field is required and must be a String
    // This could be address, city, or any location identifier
    
    rating: {type: Number, required: true}, 
    // rating field is required and must be a Number
    // Used in views to display star ratings
    // Number type allows for mathematical operations if needed
    
    photoUrl: String,
    // photoUrl field is optional (no required flag)
    // Stores the URL/path to the home's photo
    
    description: String
    // description field is optional
    // Allows for detailed text description of the property
});

homeSchema.pre('findOneAndDelete', function(next) {
    console.log("Inside homeSchema.pre()"); 
    const homeId = this.getQuery()["_id"];
    // Within the hook, 'this' refers to the document being processed
    // We get the homeId from the query object
   console.log('homeId',homeId); 

    Favourite.deleteOne({homeId})
    .then(() => { 
        console.log('Home from Favourites also deleted successfully');
        next()
    })        
    .catch(err => {
        console.log('Error deleting favourite', err);
        next();
    });
    // When a home is deleted, we also want to remove it from the favourites collection
    // We use the pre() hook to do this, so that it happens automatically when a home is deleted
    // We call the static method deleteOne() on the Favourite model
    // This method takes a filter object as its argument
    // The filter object has a single property: homeId
    // deleteOne() will remove the first document that matches the filter
    // In this case, we are removing the document from the favourites collection that matches the homeId
    // Can't use arrow function here 
    // Can't Use findByIdAndDelete as the Hook Name
});
// homeSchema.pre() is a Mongoose middleware hook
// It is a function that runs before the specified method
// In this case, we are using 'findByIdAndDelete' as the method
// This hook is called before the findByIdAndDelete method is called on the model
// Don't learn the syntax, just refer it whenever needed.


module.exports = mongoose.model('Home', homeSchema);
// Export the model so it can be used in other files
// mongoose.model() takes two arguments:
// 1. 'Home' - the name of the model (will be converted to collection name 'homes')
// 2. homeSchema - the Schema to use for this model





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