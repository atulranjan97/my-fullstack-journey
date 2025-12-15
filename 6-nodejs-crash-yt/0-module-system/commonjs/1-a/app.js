const sum = require("./sum");   // In commonjs, path me extension dena optional hai, "./sum.js" would also work
const product = require("./product");

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

// require function 3 steps me kaam karta hai
    // 1. require function ko call karte hue humne argument me jis module ka path diya hai usko dhundega 
    // 2. agar module mil jata hai to usko execute karega line by line. Agar module nahi milta hai to error de dega
    // 3. file execute hone ke baad module.export ki jo value hogi usko return kar dega

// require function synchronous hota hai