// Import the MongoDB driver package that allows us to interact with MongoDB databases
const mongodb = require('mongodb');

// Get the MongoClient class from the mongodb package
// MongoClient is used to establish connections with MongoDB databases
const MongoClient = mongodb.MongoClient;

// MongoDB connection URL containing:
// - Username: atulranjan97
// - Password: jin97kMongoDb*
// - Cluster name: atul-cluster
// - Database name: atul-cluster (not l17ingm - that's part of the cluster URL)
// - Additional options like retryWrites and w=majority for reliability
const url = "mongodb+srv://atulranjan97:jin97kMongoDb*@atul-cluster.l17ingm.mongodb.net/?retryWrites=true&w=majority&appName=atul-cluster";

let _db; 
// The underscore prefix (_) is a convention in JavaScript to indicate that a variable is intended for internal/private use
// Though it doesn't actually make the variable private, it signals to other developers not to use it directly

// Function that handles MongoDB connection
// Takes a callback function as parameter which will be executed once connection is established
const mongoConnect = (callback) => {
    // Connect to MongoDB using the URL
    // Returns a promise that resolves with the connected client
    MongoClient.connect(url)
        .then((client) => {
            // Log the connected client object for debugging
            // console.log(client);

            _db = client.db("airbnb");
            // Store a reference to the "airbnb" database in the _db variable
            // client.db() gets a Database object for the specified database name
            // Here we're connecting specifically to the "airbnb" database within our MongoDB cluster
            // We can then use this _db reference throughout our application to perform database operations
            // like inserting documents, querying data, etc.

            callback();
            // Execute the callback function
            // This allows the application to start after successful DB connection
        })
        .catch(err => {
            // If connection fails, log the error
            console.log('Error came while connecting to mongoDB', err);

            // Exit process with failure code if connection fails
            process.exit(1);
        });
}
// When this function is called, it establishes a MongoDB connection and executes the provided callback
// This ensures the application only starts after successfully connecting to the database


// Function to get the database connection
// Returns the database connection if it exists, otherwise throws an error
const getDb = () => {
    // Check if database connection exists
    if (!_db) {
        // Throw error if no connection exists
        throw new Error('Could not connect to DB');
    }

    // Return the database connection object
    return _db;
    // This allows other parts of the application to perform database operations
}

// Export the mongoConnect function (named export)
exports.mongoConnect = mongoConnect;
// This allows our application to establishes a MongoDB connection

// Export the getDb function (named export)
exports.getDb = getDb;
// This allows other files to get access to the database connection
