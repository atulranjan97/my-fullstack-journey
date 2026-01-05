import express from 'express';
import path from 'path';
import logger from './middleware/logger.js';
import posts from './routes/posts.js'   // .js extension is necessary in es module

const PORT = process.env.PORT || 8000;

const app = express();

// so in order to get the body data we actually need to add a couple lines of middleware. We don't have to install anything, earlier we used to have to install a seperate body parser package but now it's just included with express

// Body parser middleware
// app.use(express.json()) -> this will take care of being able to submit raw json but again we also want to be able to use URL encoded data so we need to add one more line app.use(express.urlencoded({extended: false})), so that will allow us to send form data
app.use(express.urlencoded({extended: false}));

// Logger middleware
app.use(logger);

// setup static folder 
// app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);
// since we are defining '/api/posts' here, In the actual route file we don't need to have prefix  /api/posts  in the url again

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


// you might've middleware you want it to run on all routes on the app level so in that case
// commonly what you'll do is you have your folder for your middleware (we named this folder middleware), in it we create a new file called `logger.js` and write our middleware, then we export that and import in our server.js and then all we have to do is wrap it in app.use as shown above

// so any request we make now, it's going to log it down to console
// so that's how you create and implement middleware to app level
