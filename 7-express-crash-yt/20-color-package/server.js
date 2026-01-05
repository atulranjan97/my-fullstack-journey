import express from 'express';
import path from 'path';
import logger from './middleware/logger.js';
import posts from './routes/posts.js'   // .js extension is necessary in es module
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const PORT = process.env.PORT || 8000;

const app = express();


// Body parser middleware
app.use(express.urlencoded({extended: false}));

// Logger middleware
app.use(logger);
// `logger` is the middleware.
// `app.use(logger)` is how the middleware is registered.
// app.use() tells Express: “Run this middleware for every incoming request.”
// `next` represents a function that triggers the next middleware or route handler in Express’s execution chain.


// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have prefix  /api/posts  in the url again


// Error handler
app.use(notFound);
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


// here we're going to use a small library called colors that allows us to basically add colors to the console and we'll make our little logs here pop a little more by adding color to it
// npm i colors
// we're going to define an object and define a mapping of http methods to colors (there could be many ways but this would be the cleanest way)
// we're going to do all this in logger.js