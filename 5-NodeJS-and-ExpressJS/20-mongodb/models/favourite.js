// Import ObjectId from mongodb package to work with MongoDB's unique identifiers
// ObjectId is a special type that MongoDB uses for the _id field of documents
const { ObjectId } = require("mongodb");

// Import getDb function that provides connection to our MongoDB database
const { getDb } = require("../util/database-util");

// Export Favourite class that handles favorite homes functionality
module.exports = class Favourite {
    // Constructor takes homeId parameter to create a new favorite
    // homeId represents the _id of a home from the homes collection
    constructor(homeId) {
        this.homeId = homeId;
    }

    // Method to save a home as favorite
    // This method first checks if home is already marked as favorite
    // If not, it adds it to favorites collection
    save() {
        // Get database connection
        const db = getDb();
        
        // First check if this home is already marked as favorite
        // findOne returns the first document that matches the filter {homeId: this.homeId}
        // If no match found, returns null
        return db.collection('favourites').findOne({homeId: this.homeId})
        .then(existingFav => {
            // If home is not already in favorites (existingFav is null)
            if (!existingFav) {
                console.log('Adding to Favourites');
                // insertOne adds a new document to collection
                // 'this' contains {homeId: homeId}
                return db.collection('favourites').insertOne(this);
            }
            
            // If home is already marked as favorite
            console.log('Already marked favourite');

            // Return resolved promise to continue chain
            // No need to do anything since it's already a favorite
            return Promise.resolve();
        })
    }

    // Static method to fetch all favorite homes
    // Used in storeController.getFavourites to display all favorite homes
    static fetchAll() {
        const db = getDb();
        // find() without parameters returns all documents
        // toArray() converts cursor to array of documents
        return db.collection('favourites').find().toArray();
    }

    // Static method to remove a home from favorites
    // Used when user wants to unfavorite a home
    static deleteById(homeId) {
        const db = getDb();
        // deleteOne removes first document that matches filter
        // In ES6, {homeId} is shorthand for {homeId: homeId}
        // when property name matches variable name
        return db.collection('favourites').deleteOne({homeId});
        // is same as
        // return db.collection('favourites').deleteOne({homeId: homeId});
    }
}

// This model works with storeController to:
// 1. Add homes to favorites (postAddFavourites)
// 2. Remove homes from favorites (postRemoveFavourites)
// 3. Display favorite homes (getFavourites)

// The favorites collection stores documents with structure:
// {
//    _id: ObjectId (automatically added by MongoDB)
//    homeId: String (ID of the favorited home)
// }
