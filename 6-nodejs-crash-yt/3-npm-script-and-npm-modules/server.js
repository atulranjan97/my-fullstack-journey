import http from 'http';
const PORT = process.env.PORT;

// 1.
    // const server = http.createServer((req, res) => {

    //     // res.write('Hello World!');
    //     // res.end();

    //     // is same as

    //     res.end('Hello World!');

    // })


// 2.
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // res.setHeader('Content-Type', 'text/plain');
    
    res.statusCode = 404;
    
    res.end('<h1>Hello World!</h1>');
})


// 3.
// const server = http.createServer((req, res) => {
//     res.writeHead(500, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({message: 'Server Error'}));
// })




server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


// whenever we make changes in this file we will have to restart the server manually in cli/terminal. To overcome this hassle we install a npm package called nodemon, then we add a script "start": "nodemon server.js" inside script property of package.json. This will enable our server to restart automatically after any change being done in the server file
// we created .gitignore file and write node_modules in it, this will prevent you node_modules folder to go in your git repo