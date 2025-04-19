// Import ObjectId from mongodb package to work with MongoDB's unique identifiers
const { ObjectId } = require('mongodb');
// Import getDb function to get database connection
const { getDb } = require('../util/database-util');

// Export Home class that represents a home listing
module.exports = class Home {
    // Constructor takes home details and optional _id parameter
    constructor(houseName, price, location, rating, photoUrl, description, _id) {
        // Initialize instance properties with the provided values
        this.houseName = houseName;  // Name/title of the home
        this.price = price;          // Price per night
        this.location = location;    // Location of the home
        this.rating = rating;        // Rating out of 5 stars
        this.photoUrl = photoUrl;    // URL of the home's photo
        this.description = description; // Detailed description

        // If _id is provided (for existing homes), convert it to MongoDB ObjectId
        if (_id) {
            // Convert _id to string first to ensure proper format, then create new ObjectId
            this._id = new ObjectId(String(_id));
        }
    }

    // Method to save or update home in database
    save() {
        // Get database connection
        const db = getDb();

        // Check if home has _id (means it already exists in database)
        if (this._id) {     
            // Update existing home
            // updateOne takes two parameters:
            // 1. Filter: find document with matching _id
            // 2. Update: $set operator replaces all fields with current instance data
            return db.collection("homes").updateOne({_id: this._id}, {$set: this})
        } else {    
            // Insert new home
            return db.collection("homes").insertOne(this);
            // MongoDB will automatically generate a unique _id field if not provided
            // The _id will be a 12-byte ObjectId value containing:
            // - 4 bytes: timestamp
            // - 5 bytes: random value
            // - 3 bytes: incrementing counter
            // After insertion, MongoDB adds the _id to our 'this' object
        }
    }

    // Static method to fetch all homes from database
    static fetchAll() {
        const db = getDb();
        // In MongoDB, find() returns a cursor object, not the actual documents
        return db.collection('homes').find().toArray();
        // A cursor is like a pointer to the result set of a query
        // It allows you to iterate through results without loading all into memory at once
        // This is useful when dealing with large datasets
        // The cursor provides methods like:
        // - next() : get next document
        // - forEach() : iterate through documents
        // - limit() : restrict number of results
        // - skip() : skip first N results
        // - sort() : sort the results
        // toArray() loads all documents from cursor into an array in memory

    }
    
    // Static method to find a specific home by ID
    static findById(homeId) {
        const db = getDb();
        // find document where _id matches
        // Convert homeId to ObjectId for MongoDB
        // next() gets first document from cursor
        return db.collection('homes').find({_id: new ObjectId(String(homeId))}).next();
    }

    // Static method to delete a home by ID
    static deleteById(homeId) {
        console.log('Came to delete ', homeId); 
        const db = getDb();
        // deleteOne removes first document matching the filter
        return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId))});
    }
    
}

// Important MongoDB Concepts:
// - Collection: Similar to a table in SQL, stores documents
// - Document: Similar to a row in SQL, stores the actual data
// - ObjectId: Unique identifier MongoDB generates for each document
// - Cursor: Result of find() operation, can be converted to array
// - Promise: All database operations return promises that resolve with results

// Common MongoDB Operations used above:
// - insertOne(): Insert a new document
// - updateOne(): Update an existing document
// - deleteOne(): Delete a document
// - find(): Get documents matching criteria
// - collection(): Access a specific collection in database