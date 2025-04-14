const { getDb } = require('../util/database-util');
const Favourite = require('./favourite');

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl, description) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.description = description;
    }

    save() {
        // Get the database connection using the getDb() utility function
        // This gives us access to the MongoDB database instance
        const db = getDb();

        // Access the "homes" collection in the database
        // If the collection doesn't exist, MongoDB will create it automatically
        // insertOne() is a MongoDB method that inserts a single document into the collection
        // 'this' refers to the current Home instance with all its properties (houseName, price, etc.)
        // insertOne() returns a Promise that resolves when the insert is complete
        return db.collection("homes").insertOne(this)
            .then(result => {
                // The result object contains information about the insert operation
                // Including things like:
                // - acknowledged: boolean indicating if operation was successful
                // - insertedId: the _id of the newly inserted document
                console.log(result);
            });
    }


    static fetchAll(callback) {
    }
    

    static findById(homeId) {
    }


    static deleteById(homeId) {
    }
    
}
