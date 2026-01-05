const http = require('http');       
const fs = require('fs');       
const {URLSearchParams} = require('url');

const requestHandler = (req, res) => {
    console.log('\nInside function `requestHandler`');

    console.log(`req.url: ${req.url}`);
    console.log('req.method:', req.method);
    console.log('');


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
        console.log('Form data received');

        const buffer = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            buffer.push(chunk);
        })
    
        req.on('end', () => {
            const body = Buffer.concat(buffer).toString();
            console.log('body: ', body);    // product=pants&budget=700

            const urlParams = new URLSearchParams(body); // returns a special type of object containing query string data in key-value pairs which you cannot access the way you access normal js object properties because its not a normal js object

            const bodyJson = {};
            for (const [key, value] of urlParams.entries()) {
                bodyJson[key] = value;
            }
            // urlParams.entries() returns an iterator which contains key-value pairs. This iterator is a special object that generates values one at a time when requested and don’t store everything in memory.

            console.log('bodyJson: ', bodyJson);      // {product: 'pants', budget: '700'}

            fs.writeFileSync('buy.txt', JSON.stringify(bodyJson));  
        })


        res.statusCode = 302;   
        res.setHeader('Location', '/products');     
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

    res.end();  
}

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);
})


