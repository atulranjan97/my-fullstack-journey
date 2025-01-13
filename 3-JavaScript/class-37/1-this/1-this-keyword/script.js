// 'use strict'

// `window` is a kind of global object in browser enviornment and here `this` refers to window object.

// `this` keyword (event handler)

/*
    Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        structuredClone: [Getter/Setter],
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [Function: fetch],
        crypto: [Getter],
        navigator: [Getter]
    }
    
    // this global object gives runtime enviornment for `node`
*/

// setTimeout(() => {
//     console.log('setTimeOut()');
// }, 2000);


// `this` points to an empty object in both strict and non-strict mode
console.log(this);  // Output: {}  


// In `non-strict` mode, `this` refers to `Global` object in node environment
// In `strict` mode, `this` refers to `undefined` in node environment
function print_this() {
    console.log(this);
}

print_this();

