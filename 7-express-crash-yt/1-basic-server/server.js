// Typically the convention we like to use is if we are creating an API or a MERN Stack application where we are serving JSON data then we'll call it server.js(as the entry point).
// If we are building a node app that uses a template engine like ejs then we'll call it app.js(as the entry point)

const express = require('express');

// initialize express into a varible called app
const app = express();
// this app(an object) is basically what we use for everything(to create routes, to use middlewares, to start the server and listen on a PORT etc)


app.get('/', (req, res) => {
    // res.send('Hello World');
    // What's nice about this is we don't have to define 'content-type' as 'text/plain' like we do in http module of node.js

    res.send('<h1>Hello World</h1>');
    // What's nice about this is we don't have to define 'content-type' as 'text/html' like we do in http module of node.js

    // we could even send json data
    // res.send({message: 'Hello World'});
    // It's just a JS object but it'll actually stringify it on its own. We don't have to do it manually like we would have to with HTTP module of node.js 

    // res.send([{id: 1, title: "Book 1"}, {id: 2, title: "Book 2"}]);
    
    // res.send(24)
    // res.send(false);

})
// respond to a get request to '/' (the root url or end point)
// the fuction takes a request and a response object and those objects have a ton of stuff on them so whatever you want to get from the headers, the body or the query strings from the URL, that's all on the request object. The response object has a bunch of method we can use

app.listen(8000, () => console.log(`Server is running on PORT 8000`));
