function sum(...nums) {
    return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
    return nums.reduce((curr, acc) => curr * acc);
}


console.log(module.exports);
// module.exports by default ek empty object hota hai


// Method 1: Exporting multiple items
module.exports.sum = sum;
module.exports.product = product;
// module.exports ek empty object hai usme humne do properties add kardi sum aur product naam ki


// Method 2: Exporting an object with multiple properties
// module.exports = { sum, product };
// yaha humne naya object create karke assign kar diya tha



/* 
    module.exports.sum = sum; 
    module.exports.product = product;

    is same as

    exports.sum = sum;
    exports.sum = product;


    
    Explanation (behind the scene)

        module = {
            ...
            exports: {},
            ...
        }

        exports = module.exports

    here we are passing the reference of empty object 
*/
