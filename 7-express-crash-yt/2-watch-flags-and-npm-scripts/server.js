const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hello World');

    // res.send('<H1>Hello World</H1>');

    res.send({message: 'Hello World'});
})

app.get('/about', (req, res) =>{
    res.send('About');
})

app.listen(8000, () => console.log(`Server is running on PORT 8000`));

// Now having to restart the server everytime we make a change is pretty annoying so there's a few things you can do, what we've done up until recently is used a thirdparty package called nodemon which is really easy to set up (we just install it with npm) 
// But with recent version of node.js we can actually use the watch flags. We don't have to use a third party package.
// go to package.json and create the following scripts in the scripts section
    // 1. "start": "node filename(entrypoint)"
    // this is the normal script to run the server but we do have to restart the server everytime we make changes 

    // with watch mode enable using --watch flag
    // 2. "dev": "node --watch filename(entrypoint)"
    // create a dev script which watches it so we don't have to keep restarting our server when changes are made
