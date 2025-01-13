// 2. Create a program to sum all odd numbers from 1 to a specified number N.

function oddSum(num) {
    if (num < 1 || !Number.isInteger(num)) {
        return 'Input must be a positive integer.';
    }
    
    let i = 1;      //  initialization
    let sum = 0;
    while (i <= num) {      // condition
        sum += i;
        i += 2;    // update
    }
    return sum;
}

console.log(oddSum(13));
console.log(oddSum(8));
console.log(oddSum(1));
console.log(oddSum(0));
console.log(oddSum(-45));
console.log(oddSum(5.5));
console.log(oddSum('5'));
console.log(oddSum('atul'));
console.log(oddSum(NaN));


/*  Number.isInteger()

Number.isInteger() is a method in JavaScript that checks whether a value is an integer (whole number). It returns true if the value is an integer and false otherwise.

console.log(Number.isInteger(5));       // true
console.log(Number.isInteger(-3));      // true
console.log(Number.isInteger(0));       // true
console.log(Number.isInteger(5.5));     // false
console.log(Number.isInteger("5"));     // false (string, not a number)
console.log(Number.isInteger(NaN));     // false
console.log(Number.isInteger(Infinity));// false
*/