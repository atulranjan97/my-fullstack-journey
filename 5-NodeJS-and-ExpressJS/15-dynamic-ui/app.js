// Core Modules
const path = require('path');

// External Modules
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');

const app = express();
/*  EJS(Embedded JavaScript)
  EJS is a simple templating engine for JavaScript (Node.js & browsers) that lets you generate HTML dynamically using plain JavaScript.

  1. Key Features of EJS
    1. Embed JavaScript directly in HTML
    2. Supports variables, loops, conditions, and partials
    3. Fast rendering with minimal overhead
    4. Works seamlessly with Express.js

  2. Basic Syntax
    EJS uses special tags to embed JavaScript inside HTML:
      Tag	                      Usage                                       Example
      <% %>	          Executes JS code (no output)	                    <% if (user) { %>
      <%= %>	        Outputs escaped value (safe for HTML)	            <%= user.name %>
      <%- %>	        Outputs raw (unescaped) HTML	                    <%- include('header') %>
      %	              Whitespace control (removes newlines)             <%_ user = null _%>

  `ejs` lets you embed JS code within html. This processing happens on server and not on client browser.
  To install ejs: npm install --save ejs
  Jaha humne express app lagaya hua hai humko ye ejs engine declare karna padta hai. ejs ka support express by default lekar aaya hai. Humko ejs ka package zaroor install karna hai par express ko ye baat samajh aati hai ki ejs type ka koi templating engine hai jo hum use kar sakte hai.

  Search EJS on chatGpt/deepseek for detailed explanation
*/

// Set EJS as the view engine
app.set('view engine', 'ejs');
/* This tells Express to use EJS as the default template engine for rendering dynamic views.

  What it means:
    -> When you call `res.render('filename')`, Express will automatically look for a file with the .ejs extension.
    -> Without this setting, you'd have to specify the extension every time (e.g., `res.render('index.ejs')`).
    -> It ensures that Express processes `.ejs` files with the EJS engine, allowing you to use EJS syntax (<% %>, <%= %>, <%- %>).
*/

app.set('views', 'views');   
/* This sets the directory where Express should look for template files (.ejs files).

  What it means:
  -> The first 'views' is an Express configuration key (it must be exactly 'views').
  -> The second 'views' is the folder name where your templates are stored (default is ./views).
  -> If you store your `.ejs` files in a different folder (e.g., templates), you would write: app.set('views', 'templates');
*/
// These two lines are essential for dynamic HTML rendering in Express.js with EJS.
// kyunki humare folder ka naam `views` hi hai to `app.set('views', 'views')` dena optional hai because iska default value views hi hota hai. Kuch bhi set na karne pr value views hi rahega. Agar humare folder ka naam views na dekar kuch aur hota toh `app.set('views', 'folder-ka-naam')` dena compulsory hota.
// Hum jo apni ejs ka code saara likhne wale hai vo sab `views` folder ke ander hi likhne wale hai. to usse view engine ko ye pata rahega ki jo humari ejs ki template hai vo `views` ke ander padi hui hai aur vahi jakar usko unko process karna hai. Humari ejs template jis bhi folder me hai vahi naam humko yaha par dena padega.

app.use(express.static(path.join(rootDir, 'public')));    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(storeRouter);   
app.use('/host', hostRouter);   

app.use((req, res, next) => {
    res.statusCode = 404;
    // res.sendFile(path.join(rootDir, 'views', '404.html'));

    res.render('404', {pageTitle: 'Page Not Found'});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT} \n`);
});

