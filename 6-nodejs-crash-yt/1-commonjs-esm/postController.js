const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post two'},
]

// method 1: export in ES module system 
    // export const getPosts = () => posts;
// to import this (ES module) 
    // import {getPosts} from './postController.js';



// method 2: ES module
    const getPosts = () => posts;
    // export {getPosts};
// to import this 
    // import {getPosts} from './postController.js';



// if you want to export it as default in ES module system
    export default getPosts
// to import this you have to import the following way without the curly braces 
    // import getPosts from './postController.js';
 


// you can even export one thing as default and then other thing as not default
export const getPostsLength = () => posts.length;


// for the coming lectures we are going to use ES module system to export/import