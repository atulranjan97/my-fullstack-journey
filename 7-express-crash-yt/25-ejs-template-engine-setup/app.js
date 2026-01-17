import express from 'express'

const app = express();

// Config ejs
// set ejs as the view engine
app.set('view engine', 'ejs');

//  set the views folder to a folder called views
app.set('views', 'views');

app.get('/', (req, res) => {
    // res.render('index');
    // since we're using a template engine we have access to res.render so if we pass in here index then it's gonna look for an index page in our views folder  
    
    // now what's really cool about these template engines is not just that we can render html pages which we've seen it in the very beginning but we can pass in dynamic data
    // if you fetch data from database then you can pass it into the view
    // to pass data, we can just add an object as a second argument
    res.render('index', {
        title: 'Welcome',
        message: 'Hello from ejs',
        people: ['John', 'Jane', 'Jack']
    });
    // so we're passing these variables ie title and message and then we go into the page that we're rendering(which in our case is index) and we can show these variable in our page
})
// so this is good if you have a project where you don't really need a very dynamic UI and you just want to fetch data and show it...stuff like that so in this case ejs could be a really good option.

app.listen(8000, () => {
    console.log('Server started');
});

// you can also have partials so for instance if we're going to have multiple pages and we want a header on every page obviously we don't want to put the header code(header html) in every single view so we can create a folder called partials inside the views folder and we'll create header.ejs and inside that file we can write of header or whatever code and then we can include it in our view files
// you can also have layouts that you don't want to repeat youself 