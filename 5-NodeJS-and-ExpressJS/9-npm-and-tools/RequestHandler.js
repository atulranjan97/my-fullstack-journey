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
        
        res.end();  

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

            // `fs.writeFileSync` is a synchronous operation, meaning it blocks the event loop. If a lot of requests come in, this could slow down the server. Using an asynchronous `fs.writeFile()` would be better. 
            fs.writeFile('buy.txt', JSON.stringify(bodyJson), (err) => {
                res.statusCode = 302;   
                res.setHeader('Location', '/products');     
                res.end();  
                console.log('Sending Response'); 
            });  
            // jab file write process complete ho jayega tab iske ander ka callback function chalega jisme hum response bhej rahe hai, yani hum file write process ke complete hone par hi response bhej rahe hai jo ki hum previous code lectures me nahi bhej rahe the
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

        res.end();  

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

        res.end();  
    }

}

module.exports = RequestHandler;    
