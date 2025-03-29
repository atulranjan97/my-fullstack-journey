const http = require('http');    
const fs = require('fs');        
const { buffer } = require('stream/consumers'); 

// Function to handle incoming HTTP requests
const requestHandler = (req, res) => {
    console.log('\nInside function `requestHandler`');
    console.log(`req.url: ${req.url}`);  // Log the requested URL
    console.log('req.method:', req.method); // Log the HTTP request method (GET, POST, etc.)

    res.setHeader('Content-Type', 'text/html'); // Set the response header to return HTML content

    // Handling the home page request
    if (req.url === "/") {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Myntra</title>
            </head>
            <body>
                <h1>Welcome to home page</h1>
                <form action="/buy-product" method="POST">  <!-- Form sends POST request to /buy-product -->    
                    <input type="text" placeholder="Enter the product that you want" name="product">
                    <br />
                    <input type="number" placeholder="Enter your budget" name="budget">
                    <input type="submit">
                </form>
            </body>
            </html>
        `);
    } 
    // Handling the form submission request
    else if (req.url === "/buy-product") {
        console.log('Form data received');

        const buffer = []; // Array to store incoming data chunks
        req.on('data', (chunk) => {  // Event listener for incoming data
            console.log(chunk); // Log received chunk (Buffer format)
            buffer.push(chunk); // Push chunk into buffer array
        });
    
        req.on('end', () => { // Event listener for when all data is received
            const body = Buffer.concat(buffer).toString(); // Convert buffer to string
            console.log(body); // Log the form data (e.g., "product=pants&budget=900")
        });

        fs.writeFileSync('buy.txt', 'Myntra app');  // Write a file named 'buy.txt' with content 'Myntra app'

        res.statusCode = 302;   // Redirect status code (302 Found - Temporary Redirect)
        res.setHeader('Location', '/products');  // Redirect user to the '/products' page
    } 
    // Handling the /products route
    else if (req.url === "/products") {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Products</title>
            </head>
            <body>
                <h1>Product list will appear here</h1>
            </body>
            </html>
        `);
    } 
    // Handling all other undefined routes (404 error page)
    else {
        res.statusCode = 404; // Set status code to 404 (Not Found)
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Page Not Found</title>
            </head>
            <body>
                <h1>404 Page Not Found</h1>
            </body>
            </html>
        `);
    }

    res.end();  // End response to prevent request from hanging
}

// Creating an HTTP server with the requestHandler function
const server = http.createServer(requestHandler);

const PORT = 3000; // Define port number
server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`); // Log server start message
});
