// core nodeJS modules
import http from 'http';
import fs from 'fs/promises';   // import promise version of fs module
import url from 'url';
import path from 'path';

// console.log(process);
const PORT = process.env.PORT;

// Get current path (in CommonJS modules system)
// __filename (this will give you the current file name with the path)
// __dirname (this will give you the current path of the file that you are in)
// (works in commonJS module system only, these aren't available if you are using ES module, they are not available in the environment and you will get an error if you try to use them)

// Get current path (in ES modules system)
const __filename = url.fileURLToPath(import.meta.url);  // fileURLToPath takes the file url and turns it into a path
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);
// __filename: /home/atul/myCode/my-fullstack-journey/6-nodejs-crash-yt/3-npm-script-and-npm-modules/server.js
// __dirname: /home/atul/myCode/my-fullstack-journey/6-nodejs-crash-yt/3-npm-script-and-npm-modules


// 1.
    // const server = http.createServer((req, res) => {

    //     // res.write('Hello World!');
    //     // res.end();

    //     // is same as

    //     res.end('Hello World!');

    // })



// 2.
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     // res.setHeader('Content-Type', 'text/plain');
    
//     res.statusCode = 404;
    
//     res.end('<h1>Hello World!</h1>');
// })



// 3.
// const server = http.createServer((req, res) => {
//     res.writeHead(500, {'Content-Type': 'application/json'});    // 500 is a response code for server error

//     res.end(JSON.stringify({message: 'Server Error'}));
// })



// 4.
// const server = http.createServer((req, res) => {

//     // console.log(req.url);
//     // console.log(req.method);

//     res.setHeader('Content-Type', 'text/html');
//     // res.setHeader('Content-Type', 'text/plain');
    
//     res.statusCode = 404;
    
//     res.end('<h1>Hello World!</h1>');
// })


// 5.
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, 'Content-Type', 'text/html');
//         res.end('<h1>Hello World!</h1>');
//     } else if (req.url === '/about') {
//         res.writeHead(200, 'Content-Type', 'text/html');
//         res.end('<h1>About</h1>');
//     } else {
//         res.writeHead(404, 'Content-Type', 'text/html');
//         res.end('<h1>Not Found</h1>');
//     }
// })




// 5. Check if the req is a GET request
// const server = http.createServer((req, res) => {
//     try {
//         // Check if GET request 
//         if (req.method === 'GET') {
//             if (req.url === '/') {
//                 res.writeHead(200, 'Content-Type', 'text/html');
//                 res.end('<h1>Hello World!</h1>');
//             } else if (req.url === '/about') {
//                 res.writeHead(200, 'Content-Type', 'text/html');
//                 res.end('<h1>About</h1>');
//             } else {
//                 res.writeHead(404, 'Content-Type', 'text/html');
//                 res.end('<h1>Not Found</h1>');
//             }
//         } else {
//             throw new Error('Method not allowed');
//         }
//     } catch (error) {
//         res.writeHead(500, 'Content-Type', 'text/plain');
//         res.end('Server Error');
//     }
// })



// 6. 
const server = http.createServer(async (req, res) => {
    try {
        // Check if GET request 
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
               filePath = path.join(__dirname, 'public', 'index.html'); 
            } else if (req.url === '/about') {
               filePath = path.join(__dirname, 'public', 'about.html'); 
            } else {
                throw new Error('Not Found');
            }
        } else {
            throw new Error('Method not allowed');
        }
         
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    } catch (error) {
        res.writeHead(500, 'Content-Type', 'text/plain');
        res.end('Server Error');
    }
})
// we created a public folder and in that created two html files by the name index.html and about.html


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


// Everytime we make changes in the file we will have to restart the server manually in cli(or terminal). To overcome this hassle we install a npm package called nodemon, then we add a script "start": "nodemon server.js" inside script property of package.json. This will enable our server to restart automatically after any change being done in the server file
// we created .gitignore file and write node_modules in it, this will prevent you node_modules folder to go in your git repo