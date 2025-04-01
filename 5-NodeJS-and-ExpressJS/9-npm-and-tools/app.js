// Core Module
const http = require('http');       

// Local Module
const RequestHandler = require('./RequestHandler');



const server = http.createServer(RequestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT} \n`);
})


