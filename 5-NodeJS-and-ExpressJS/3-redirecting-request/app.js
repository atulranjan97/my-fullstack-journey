const http = require('http');    // core module `http` has now been included in this program
const fs = require('fs');


const requestHandler = (req, res) => {
    console.log('Inside function `requestHandler`');

    console.log(`req.url: ${req.url}`);
    console.log('req.method:', req.method);
    // console.log('req.headers:', req.headers);
    console.log('');

    // ideally `GET` type ki request se server ki state me koi change nahi hona chahiye, client sirf data lene jaa raha hai server se
    // POST type ki request me client server ko data send karta hai

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
                <!--when client click submit button after filling up the details, a POST request will be sent to path '/buy-product' with client data (product:pants, budget:900)-->
            </body>
            </html>
        `);
    } else if (req.url === "/buy-product") {
        console.log('Form data received \n');

        fs.writeFileSync('buy.txt', 'Myntra app');  // we will study nodeJS file system later in detail
        // this line will create a .txt file by the name 'buy.txt' and write 'Myntra app' to it, we intend to write the data that user sent to us but for now we are just writing 'Myntra app'

        res.statusCode = 302;   // status code 302 indicates redirection to another url
        res.setHeader('Location', '/products');     // redirecting client to '/products'
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
        res.statusCode = 404;
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
    console.log(`Server running at: http://localhost:${PORT} \n`);
})

// search `http response code` in google for info related to http response code

