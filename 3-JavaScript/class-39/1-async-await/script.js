function hello() {
    return 'Hello World';
}

let str = hello();
console.log(str);                   // Output: Hello World

console.log(typeof str);            // Output: string


// syntax sugar for promises.
async function hey() {
    return 'Hey World';
}
// jaise hi hum kisi function ke pehle `async` keyword laga dete hai then that function returns a promise.

// agar ye kaam khud se karte (above code is syntactical sugar of this code, browser internally async/await ko promise me convert karta hai and then execute) 
// function hey() {
//     return new Promise((resolve, reject) => {
//         resolve('Hey World');
//     })
// }

let str2 = hey();                       // returns a promise which we've stored in str2
console.log(str2);                      // contains a promise
console.log(typeof str2);               // Output: object
str2.then(data => console.log(data));   // Output: Hey World

// promise ka creation easy karne ke liye simply function ke sath async laga do