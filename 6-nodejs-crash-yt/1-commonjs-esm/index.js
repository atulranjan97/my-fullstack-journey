// const generateRandomNumber = require('./utils');    // with commonjs we don't have to add .js extenstion in the path
// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');    // with commonjs we don't have to add .js extenstion in the path

// console.log(`Random Number: ${generateRandomNumber()}`)
// console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(0)}`)




import getPosts, { getPostsLength } from './postController.js';     // with ES module we must add .js extension in the path
// to enable ES module system to export/import, you need to add this "type": "module" in your package.json file. Once added, system like commonjs no longer work

console.log(getPosts());
console.log(`Posts Lenth: ${getPostsLength()}`)