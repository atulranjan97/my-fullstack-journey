const express = require('express');
const path = require('path');

const app = express();


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html')); 
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html')); 
// })

// you can imagine if you have a lot of files you're going to have to create a bunch of routes just to load a single page and that kind of silly so what you can do is use the express.static middleware




// setup static folder 
app.use(express.static(path.join(__dirname, 'public')));
// so basically we are going to declare one of our folder to be static meaning you can just go to the URL and it'll just work and we going to set public to be out static folder
// express.static() takes in the location of what you where you want your static folder which in our case is public
// this is a middleware and middleware is just a function that runs between the incoming request and the outgoing response.

// so now if we sent request to localhost:8000/ or localhost:8000/index.html, it still works and we will get the homepage(ie. index.html)
// now if we go to localhost:8000/about, even though we have that about.html in our public folder(which we declared static) it's not going to work because we actually have to specify the .html extension in url path ie /about.html
// so now anytime we wanted to create an html like let's say we want contact.html then all we have to do is to create it in our folder and it will automatically work and we don't have to create a seperate route for it
// so that's how we create a static server with node.js


app.listen(8000, () => console.log(`Server is running on PORT 8000`));

