const path = require('path');

// console.log(`require.main: ${require.main}`);
console.log(require.main);
console.log(`require.main.filename: ${require.main.filename}`);  // /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/13-airbnb/app.js
console.log(path.dirname(require.main.filename))    // /home/atul/myCode/my-fullstack-journey/5-NodeJS-and-ExpressJS/13-airbnb

// This line is used in Node.js to get the directory of the main (entry) file of the application:
module.exports = path.dirname(require.main.filename);
// humare project ka jo bhi absolute path hai vo humne nikal kar export kar diya.
// ye `path-util.js` kahi par bhi ho is baat se koi farak nahi padega, humein humesha project ke root ka hi path milne wala hai.

// `path.dirname(filePath)` returns the parent directory of a given file path.
// Since `require.main.filename` gives the entry file path, path.dirname() extracts just the folder path.

// `require.main` refers to the first module that was executed when the app started.
// `require.main.filename` gives the absolute path of that entry file.