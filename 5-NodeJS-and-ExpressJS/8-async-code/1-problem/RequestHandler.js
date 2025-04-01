const fs = require('fs');       
const {URLSearchParams} = require('url');

const RequestHandler = (req, res) => {
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
            console.log('body: ', body);      // product=pants&budget=700

            const urlParams = new URLSearchParams(body);

            console.log('urlParams.entries() :', urlParams.entries());      
            const bodyJson = {};
            for (const [key, value] of urlParams.entries()) {
                bodyJson[key] = value;
            }
            console.log('bodyJson: ', bodyJson);      // {product: 'pants', budget: '700'}

            fs.writeFileSync('buy.txt', JSON.stringify(bodyJson));  

            res.statusCode = 302;   
            res.setHeader('Location', '/products');     
            console.log('Sending Response'); 
        })

    } else if (req.url === "/products") {
        console.log('inside /products')
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

module.exports = RequestHandler;    

/*  --------------------- ISSUE --------------------- 
    You will get "Cannot set headers after they are sent to the client" error because `res.setHeader()` (or `res.write()`) is being called after `res.end()` has already been executed. Here’s why this is happening in your code:

    Issues in Your Code
        1. Calling `res.end()` Too Early:
            1. For `/buy-product`, `res.end()` will execute before the `req.on('end')` event completes (as `req.on('end')` is an async operation, which can cause unexpected behavior.
            2. If `res.end()` is executed outside the `req.on('end')` callback, the response ends before the form data is fully processed.
            3. Then, when you try to set headers (like `res.setHeader('Location', '/products')`), it fails because the response is already closed.

        2. Handling `/buy-product` Incorrectly:
            1. The response must not end before `req.on('end')` completes.
            2. Make sure `res.end()` is inside `req.on('end')` in this route.

        3.  Issue: `fs.writeFileSync` is being used here. It is a synchronous operation, meaning it blocks the event loop.
            If a lot of requests come in, this could slow down the server. Using an asynchronous `fs.writeFile()` would be better. 


    How to fix it
        1. Make sure `res.end()` is only executed inside `req.on('end')` for `/buy-product`.
        2. Do not call `res.end()` outside of `req.on('end')` in that route.
        3. Ensure you are not trying to modify headers (`res.setHeader()`) after the response is already sent.
*/