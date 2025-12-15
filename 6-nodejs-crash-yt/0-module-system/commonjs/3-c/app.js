const {sum, product} = require("./math");   // path me extension dena optional hai, "./sum.js" would also work

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

// require function 3 steps me kaam karta hai
    // 1. require function ko call karte hue humne argument me jis module ka path diya hai usko dhundega 
    // 2. agar module mil jata hai to usko execute karega line by line. Agar module nahi milta hai to error de dega
    // 3. file execute hone ke baad module.export ki jo value hogi usko return kar dega
    // is case me module.export ki value ek object hai jisme do properties hai sum aur product naam ki {sum: [Function: sum], product: [Function: product] }