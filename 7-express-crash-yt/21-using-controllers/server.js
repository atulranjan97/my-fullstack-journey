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


// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have prefix  /api/posts  in the url again


// Error handler
app.use(notFound);
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

// now the next thing we'd like to do is move all the functionality from the routes file. We want to have the controller method, that's the a cleaner way to do this rather than just having all the logic inside the route file
// we just want the route file to point the correct whatever the endpoint and method to a controller method rather than putting everything in there so that would go in it's own function in the controller file
// let's create a new folder called controllers and then inside controllers we'll have a file called `postController.js`