import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import posts from './routes/posts.js'   // .js extension is necessary in es module
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);  
console.log(__filename);    // /home/atul/myCode/my-fullstack-journey/7-express-crash-yt/22-dirname-workaround/server.js
const __dirname = path.dirname(__filename);
console.log(__dirname);     // /home/atul/myCode/my-fullstack-journey/7-express-crash-yt/22-dirname-workaround

const app = express();

app.use(express.json());    // parse raw JSON (from html form most probably)
// Express reads the raw request body
// Parses the JSON
// Assigns it to req.body

// Body parser middleware   // parse form-encoded data
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

// now we want to have some frontend js to fetch the data from my backend and you's probably be using some kind of frontend framework/library like react etc. We're not doing that for now, we're just using vanilla js but the way that you would fetch data and stuff is going to be the same
// so let's go to public folder and then index.html and we are just to change couple of things there
// here we will see how our frontend js(main.js in public folder) working with our backend api(server.js)