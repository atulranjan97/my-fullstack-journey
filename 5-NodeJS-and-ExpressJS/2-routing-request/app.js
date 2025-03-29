const http = require('http');
// core module `http` has now been included in this program

console.log('line 4 executed');

// --- Routing Request in NodeJS ---
    // Routing in Node.js is the process of defining how your application handles different HTTP requests (like GET, POST, PUT, DELETE) for specific URLs. It’s essential for building APIs and web applications.
    // You manually check `req.url` and `req.method` to handle requests.

const requestHandler = (req, res) => {
    console.log('Inside function `requestHandler`');

    console.log(`req.url: ${req.url}`);
    console.log('req.method:', req.method);
    console.log('req.headers:', req.headers);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === "/") {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Myntra</title>
            </head>
            <body>
                <h1>Welcome to home page</h1>
                <form action="/buy-product" method="POST">      
                    <input type="text" placeholder="Enter the product that you want" name="product">
                    <br />
                    <input type="number" placeholder="Enter your budget" name="budget">
                    <input type="submit">
                </form>
            </body>
            </html>
        `);
    } else if (req.url === "/products") {
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
    } else {
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

    res.end();  // method that ends the response and sends it to the client.
}

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
})


// continue from 23:46