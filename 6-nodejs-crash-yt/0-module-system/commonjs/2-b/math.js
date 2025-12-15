function sum(...nums) {
    return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
    return nums.reduce((curr, acc) => curr * acc);
}


/*
    module.exports = sum;
    module.exports = product

    we can't export multiple function one by one using module.exports like shown above
*/

// we make a single object and put both these functions into it and then export that object.
module.exports = {
    sum,
    product
};

// multiple chize hum kyun nahi export kar sakte hai, kyunki hum require ka use karke import karte hai and require ek function hai aur function jab call hota hai to ek value return karta hai aur function ek baar me ek hi value return kar sakta hai