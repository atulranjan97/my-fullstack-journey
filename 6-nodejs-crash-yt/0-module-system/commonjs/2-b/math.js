// Exporting multiple functions

function sum(...nums) {
    return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
    return nums.reduce((curr, acc) => curr * acc);
}


/*  we can't export multiple function one by one using module.exports like shown below

    module.exports = sum; 
    module.exports = product

    // module.exports me jo final value assign hui hai vahi return hoti hai. Is file me module.exports me `sum` assign hua hai then next line me sum ko product se replace kar diya gaya hai to is vajah se ab module.exports me `product` assigned hai is vajah se product as final value return ho jayegi. 

*/


//  Exporting an object with multiple properties
    module.exports = {
        sum,
        product
    };

// multiple chize hum kyun nahi export kar sakte hai, kyunki hum require ka use karke import karte hai and require ek function hai aur function jab call hota hai to ek value return karta hai aur function ek baar me ek hi value return kar sakta hai
