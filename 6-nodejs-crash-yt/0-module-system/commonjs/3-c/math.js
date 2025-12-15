function sum(...nums) {
    return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
    return nums.reduce((curr, acc) => curr * acc);
}


console.log(module.exports);
// module.exports by default ek empty object hota hai

/*
    module.exports = {
        sum,
        product
    }
        
    yaha humne naya object create karke assign kar diya tha
*/


module.exports.sum = sum;
module.exports.product = product;
// module.exports ek empty object tha usme humne do properties add kardi sum aur product naam ki