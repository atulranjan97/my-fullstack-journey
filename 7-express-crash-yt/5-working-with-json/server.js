const express = require('express');
const path = require('path');

const app = express();


// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));

// usually we are going to be dealing with database but let's just go ahead and hardcode some post here 
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

app.listen(8000, () => console.log(`Server is running on PORT 8000`));



