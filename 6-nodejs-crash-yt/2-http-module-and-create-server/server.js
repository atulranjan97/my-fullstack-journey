import http from 'http';
// http is node.js core module provided be node.js by default and we just have to import it 

const PORT = 8000;

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
const server = http.createServer((req, res) => {
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Server Error'}));
})




server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})