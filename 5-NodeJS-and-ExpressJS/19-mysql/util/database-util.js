// Import the mysql2 package which provides MySQL database functionality for Node.js
const mysql = require('mysql2');

// Create a connection pool for MySQL database
// A pool manages multiple connections and reuses them, improving performance
const pool = mysql.createPool({
    host: 'localhost',      // The database server location (running locally)
    user: 'atulranjan97',   // MySQL username for authentication
    password: '9313',       // Password for the MySQL user
    database: 'airbnb'      // Name of the database we want to connect to
});

module.exports = pool.promise();
// Export the pool with promise support
// This allows us to use async/await syntax when executing queries
// The promise() method wraps the pool in a promise interface


/* Detailed explanation of createPool():

    createPool() is a method from mysql2 that creates a pool of database connections. Here's why it's important:

    1. Connection Management:
    - Instead of creating a new connection for every database operation, the pool maintains a set of reusable connections
    - When a query needs to be executed, it takes an available connection from the pool
    - After query completion, the connection returns to the pool for reuse
    
    2. Performance Benefits:
    - Creating new connections is expensive (takes time and resources)
    - Pool reuses existing connections, significantly reducing overhead
    - Handles multiple simultaneous database requests efficiently

    3. Configuration Options:
    - host: Where the MySQL server is running
    - user/password: Authentication credentials
    - database: Which database to connect to
    - connectionLimit: Maximum number of connections in pool (default 10)
    - queueLimit: Maximum connection requests to queue (default 0 - unlimited)
    - waitForConnections: Whether to queue requests when no connections available

    4. Automatic Handling:
    - Manages connection timeouts
    - Handles connection errors
    - Automatically reconnects if connection is lost
    - Ensures connections are properly closed when not in use

    5. Benefits over Single Connection:
    - Better scalability for multiple users/requests
    - Improved application reliability
    - Automatic connection management
    - Better resource utilization
*/