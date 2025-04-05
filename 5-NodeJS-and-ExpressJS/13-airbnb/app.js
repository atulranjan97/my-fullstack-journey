// Core Modules
const path = require('path');

// External Modules
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const hostRouter = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');

const app = express();


/* -------------------------------------------------------- Static Files in Web Development (Express.js Context) --------------------------------------------------------
  Static files are assets that don’t change dynamically on the server—they are sent to the browser as-is. These include:
    1. CSS (input.css, output.css)
    2. JavaScript (script.js)
    3. Images (.png, .jpg, .svg)
    4. Fonts (.woff, .ttf)
    5. HTML files (if served statically)
*/

// In Express, you need to explicitly tell the server to serve static files. This is done using:
app.use(express.static(path.join(rootDir, 'public')));    // Serves static files from public/
// This makes everything inside the `public/` folder accessible from the browser as if it were in the root (/).

/* Why Can't We Use Relative Paths for Static Files in Express?
In a regular HTML file opened directly in a browser, relative paths work fine because the browser loads files from the local filesystem.
However, in an Express.js app, files are served through the server, not directly from the filesystem. This means:

1. Express doesn’t serve files automatically.
      -> By default, Express only responds to defined routes (e.g., app.get("/")).
      -> If you try <link href="../public/styles/output.css">, path `../public/output.css` tells the browser to look one folder up, meaning it looks for `/13-airbnb/public/styles/output.css`, But the browser doesn't have access to `public/` directly!

2. Express Doesn’t Expose `public/` Unless You Tell It To
      -> The browser can only request files that the server makes available.
      -> Without app.use(express.static('public')), the browser cannot access anything in public/..

  Express needs explicit permission to serve static files.
      -> When you add `app.use(express.static('public'))`, it tells Express: "Serve everything inside `public/` as if it were the root (/)."

// Summary:   
  -> Relative paths in HTML refer to the file system, but Express serves files through a URL-based system.
  -> `public/` isn't accessible unless Express is told to serve it.
  -> The correct way is to use `/output.css` instead of `../public/output.css` when express.static('public') is set. 
*/



app.use(bodyParser.urlencoded({ extended: true }));
// agar JSON normal key-value hai toh aapko {extended: true} likhne ki zarurat nahi hai, agar json nested hai toh {extended: true} likhne ki zarurat padegi.

app.use(storeRouter);   
// `storeRouter` apne aap me ek middleware hai jo '/' path ki handling kar raha hai.

app.use('/host', hostRouter);   // first argument '/host' is known as base route here. 
// `hostRouter` apne aap me ek middleware hai jo multiple path(`/add-home (GET) and `/add-home (POST)``) ki handling kar raha hai. 
// argument me '/host' dene se `hostRouter` me hum jo-jo path handle kar rahe honge un sabke aage `/host` ko laga dega.


// abhi jo bhi hum naye-naye api ya path implement karenge, uske liye hume is `app.js` me code add nahi karna hai, agar humein koi user(airbnb pr room search karne wale) ke liye code add karna hai toh hum store router me jaakar karenge, agar mujhe koi host(airbnb par apne room ko add karne wale) ka code add karna hai to hum host router me jakar karenge

app.use((req, res, next) => {
    res.statusCode = 404;
    res.sendFile(path.join(rootDir, 'views', '404.html'));
    // notice we use `res.sendFile` instead of `res.send` to send the html file.
    // `__dirname` ek constant hai jo humein current directory ka path de raha hota hai
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT} \n`);
});




/* -------------------------------------------------------- app.use('/host', hostRouter); --------------------------------------------------------  
'/host' is known as base route here.

 What is Mounting Middleware?
    Mounting middleware means attaching a router or middleware function to a specific path so that it only applies to requests that match that path.

  How it works?
    Express me app.use() function middleware ko globally ya kisi specific route ke liye apply karne ke liye use hota hai. Jab hum app.use('/host', hostRouter) likhte hain, toh /host ek base route ban jata hai aur hostRouter uske andar kaam karta hai.

    In Express, `app.use()` is used to apply middleware globally or to a specific path. When you pass a path as the first argument, it acts as a base route (or prefix) for the middleware or router you attach.

  How Routes Are Resolved?
    1. Jab koi request `/host/add-home` pe aati hai, Express `app.use('/host', hostRouter)` ko check karega.
    2. Kyunki request `/host` se shuru ho rahi hai, Express isse `hostRouter` ke andar bhej dega.
    3. `hostRouter` me jo `/add-home` route hai, woh match hoga aur response bhej diya jayega.



  Jab hum app.use('/host', hostRouter) likhte hain, toh Express pehle check karta hai ki request ka URL `/host` se start hota hai ya nahi. Agar nahi hota, toh `hostRouter` poora skip ho jata hai, bina andar jakar ek-ek route check kare.

  Advantage:
    1. Performance better hoti hai – Kyunki bina zaroorat ke sare routes check nahi karne padte.

  Matlab agar request `/add-home` pe aayi hai, toh `hostRouter` bilkul bhi execute nahi hoga, sirf `/host` se start hone wali requests hi usme jayengi. 
---------------------------------------------------------------------------------------------------------------------------------------------------------*/