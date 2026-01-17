import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import posts from './routes/posts.js'   // .js extension is necessary in es module
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const PORT = process.env.PORT || 8000;

// __dirname give current directory that we're in. Works only in common.js module 
// however there is a workaround for es modules
// To get the directory name first we have to import `fileURLToPath` from url module of node.js

console.log(import.meta.url);   // file:///home/atul/myCode/my-fullstack-journey/7-express-crash-yt/22-dirname-workaround/server.js
// `import.meta.url` gives us the file URL to the current file we're in

const __filename = fileURLToPath(import.meta.url);  
console.log(__filename);    // /home/atul/myCode/my-fullstack-journey/7-express-crash-yt/22-dirname-workaround/server.js

// To get the directory name
const __dirname = path.dirname(__filename);
console.log(__dirname);     // /home/atul/myCode/my-fullstack-journey/7-express-crash-yt/22-dirname-workaround

const app = express();


// Body parser middleware
app.use(express.urlencoded({extended: false}));

// Logger middleware
app.use(logger);


// setup static folder 
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have prefix  /api/posts  in the url again


// Error handler
app.use(notFound);
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


// how we can interact with our backend from the frontend and we already have a public folder with some html files, we'll just make it so we can have a button we click and it fetches data, we'll also have a simple form where we can add a new post, add a title