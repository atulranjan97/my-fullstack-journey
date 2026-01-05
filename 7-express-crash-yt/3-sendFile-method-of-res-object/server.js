const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
    // res.sendFile() method will take in the absolute path of whatever you want to load 
    // import the path module (its kind of like a utility to just help with the file paths)
    // __dirname basically give us the path to the current directory that we're in and then from there we wanna go to the public folder and the index.html(the the page we want to load)
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html')); 
})


app.listen(8000, () => console.log(`Server is running on PORT 8000`));

