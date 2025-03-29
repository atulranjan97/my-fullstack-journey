const http = require('http');   // Import the built-in HTTP module to create a server 
const fs = require('fs');       // Import the File System module to handle file operations
const { buffer } = require('stream/consumers');     // Import 'buffer' (though it's unused here)

// Function to handle incoming HTTP requests
const requestHandler = (req, res) => {
    console.log('\nInside function `requestHandler`');
    console.log(`req.url: ${req.url}`);     // Log the requested URL
    console.log('req.method:', req.method);     // Log the HTTP request method (GET, POST, etc.)
    // console.log('req.headers:', req.headers);
    console.log('');

    // ideally `GET` type ki request se server ki state me koi change nahi hona chahiye, client sirf data lene jaa raha hai server se
    // POST type ki request me client server ko data send karta hai

    res.setHeader('Content-Type', 'text/html');     // Set the response header to return HTML content

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
    }
    // Handling the form submission request
    else if (req.url === "/buy-product") {
        console.log('Form data received');

        const buffer = [];  // Array to store incoming data chunks
        req.on('data', (chunk) => {     // Event listener for incoming data
            console.log(chunk);     // Log received chunk (Buffer format)
            buffer.push(chunk);     // Push chunk into buffer array
        })
        // client side se data ek stream me aa raha hai chhote-chhote chunks ke roop me(that's why ye ek async type ka operation hai), aur jaise-jaise chunks aa rahein hai hum inhe buffer naam ke array me push karte ja rahe hai 
        // humne req object pe on naam ka listener lagaya hai, jab-jab chunks aayege tab-tab ye data wala callback chalne wala hai.
        
        // do tarah ke alag-alag buffers hai, ek buffer hai jo protocol layer par defined hai aur ek buffer hai jo hum yaha rakh rahein hai, toh jo http protocol ka buffer hai vaha par aisa ho sakta hai ki pehle koi chunk ki misordering ho rahi ho but humse pehle ek layer already hai jaha par jo chhote-chhote bahut saare packets aa rahein hai un sabko pehle usne sequence me laga liya hai uske baad vo humko utha kar de raha hai, aur yaha ye bhi zaroori nahi hai ki network se jis hisab se packets aaye hai ye jo humare chunks ka size hai ye vahi packets ho, aisa bhi ho sakta hai ki http layer humare liye ,internally jo uske paas packets aaye hai un 10-10 packets ko mila kar tab humko chunks bana kar de rahi hai, toh yaha jo buffering ho rahi hai vo 2 level par ho rahi hai, ek buffering already http layer par ho chuki hai jaha par packets ki misording ya bich me packets missing hai ye sab issue handle ho raha and iske baad jo data humare paas aa raha hai vo already sequence me aa raha hota hai jisko hum apne array buffer me store kar rahien hai.

        // jaise-jaise chunks aayega tab-tab callback function chalega.
    
        req.on('end', () => {   // Event listener for when all data is received
            const body = Buffer.concat(buffer).toString();  // Convert buffer to string
            console.log(body);  // Log the form data (e.g., "product=pants&budget=900")
        })
        // `end` ek event hai jo tab trigger hoga jab buffer array me pura ka pura data ikkatha ho chuka hoga, and then ye callback function chalega, isme humne JS ka ek `Buffer` class use kiya jo `concat` method use karta hai matlab abhi buffer me data ke saare chhote-chhote chunks hai toh ye concat method buffer ke saare chunks ko jodkar ek object bana deta hai and then is data object ko `toSting` method ki help se string me convert kar diya  


        fs.writeFileSync('buy.txt', 'Myntra app');  // Write a file named 'buy.txt' with content 'Myntra app'  
        // we will study nodeJS file system later in detail
        // this line will create a .txt file by the name 'buy.txt' and write 'Myntra app' to it, we intend to write the data that user sent to us but for now we are just writing 'Myntra app'

        res.statusCode = 302;   // Redirect status code (302 Found - Temporary Redirect)      
        // status code 302 indicates redirection to another url

        res.setHeader('Location', '/products');     // Redirect user to the '/products' page 
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

    res.end();  // End response to prevent request from hanging  
    // method that ends the response and sends it to the client.
}

// Creating an HTTP server with the requestHandler function
const server = http.createServer(requestHandler);

const PORT = 3000;  // Define port number
server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);  // Log server start message
})

// search `http response code` in google for info related to http response code

