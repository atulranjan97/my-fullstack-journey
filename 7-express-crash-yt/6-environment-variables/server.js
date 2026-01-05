const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;

const app = express();


// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));


let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]
// let's just pretend that this is in the database

app.get('/api/posts', (req, res) => {
    // res.send(posts);
    // we can do res.send() and can pass a JS object and it will get parsed as or stringify as JSON 

    // But there also a specific res.json method and that's normally a prefered way 
    res.json(posts);
})
// There's a common convention ie if it's a JSON API prefix all your endpoints with /api/... 

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


// let's create a file called .env and if you have like google api key or something like that, you'll put that in this file so you don't want to push this to github or anywhere else so that's why you put this in your .gitignore file
// Now we don't have any api keys so we're going to put in here the port number for now
// In order to access the environment variable first we have to explicitely describe the .env file in our package.json by editing the following script 
    // "dev": "node --watch --env-file=.env server"
// Then we can access it using process.env.(name_of_variable_defined_in_.env_file), in our case it is process.env.PORT

// so that's how we can use .env file without having to use the env package