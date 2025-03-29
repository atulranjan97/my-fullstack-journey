const http = require('http');
// core module `http` has now been included in this program

console.log('line 4 executed');



// hume apne handler function me do argument pass karne hote hai, convention hai `req` and `res ` naam ke argument pass karne ki.  
// client se aayi request se related sari details hume apne `req` argument me ek object ke roop me mil jayengi 
// client side se mili request se related sari details ka ek object, http module humare is `handlerFunction` ke `req` argument me pass kar dega, and `res` argument me ek empty object pass kar dega jisme hum response se related sari info fill karnge and client ko vapas bhejenge
// abhi `res` add nahi hua hai, res ekdm khali hai, vo ek tareeka de raha hai ki response bhejenge kaise, http module hume ek empty object de raha hai as argument jise hum response se related data ki info bhar sakte hai, aur baad me client ko bhej sakte hai
// client ke har request par humara ye `requestHandler` function execute hoga, jitni baar bhi request aayegi, server isi function ko execute kar raha hoga

const requestHandler = (req, res) => {
    console.log('Inside function `requestHandler`');
    // console.log('Request received, request object', req);
    // console.log('Request received', req.url, req.method, req.headers);


    // brute force to send response
    res.setHeader('Content-Type', 'text/html');
/*
    res.write('<!DOCTYPE html>');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<title>Document</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Welcome to First Server</h1>');
    res.write('</body>');
    res.write('</html>');
*/

    // A better to do the above task is by using backticks for multi-line strings
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <h1>Welcome to First Server</h1>
        </body>
        </html>
    `);
    // res.write() sends a chunk of the response body to the client without ending the response.

    res.end();  // method that ends the response and sends it to the client.
}

const server = http.createServer(requestHandler);
// ye function(requestHandler) server ko dene ka ye matlab hai ki client se request jab bhi humare paas ayegi, toh us request ko humare `requestHandler` function ko de dena fir humara `requestHandler` function is request ko handle karke client ko response bhej dega.
// `createServer` bhi ek object bana ke return karta hai server type ka.
// createServer ko ek server object bana kar dena hai jispar kuch alag-alag function bane honge, but vo requestHandler function ke reference ko save kar ke rakhne wala hai apne paas kyunki ye function usko ek baar call nahi karna balki jitni baar request aayegi utni baar call karna hai, ab jab bhi request aayegi vo pehle request se related sari details ko collect karke ek object banayega sath ke sath vo ek naya object create karega jisme kuch-kuch chiz vo pehle se bharega aur uske baad in dono object ko uthayega and tab requestHandler function ko call karega in dono objects ke sath, itna kaam vo har request ke liye karega

// server.listen(3000);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
})
// toh jab hum apna server start karte hai toh hume ek port number batana padta hai ki meri sari request mai port number 3000 par listen karna start kar raha hu.
// now we can start our server by writing `node app.js` in terminal, and server will start listening to request at port 3000.
// to kill the server we have to press `ctrl + c` shortcut


// localhost ka matlab hai ki humare hi system par server hosted hai
// 127.0.0.1 means loop to my machine itself.

// ek computer par multiple server run kar rahe hote hai, kisi request ko kis server ke paas le ke jana hai ye vo server is computer ke kis port number par run kar rha hai usse pata chalta hai
// IP address pahunchata hai ek computer par, but jo port number hai vo batata hai ki us computer ke ander kis application par client request jane wali hai.  

