// Reversing the digits of a number

let num = 3487;
function reverseTheDigit(num) {
    let result = 0;
    for (; num > 0 ;) {
        let lastDigit = num % 10;
        result = result * 10 + lastDigit ;

        num = Math.floor(num / 10);   // update
    }
    return result;
}

console.log(reverseTheDigit(3487));

/*  ** Remember **

    In C/C++
        3 / 2 gives 1
    
    In JavaScript 
        3 / 2 gives 1.5

*/
