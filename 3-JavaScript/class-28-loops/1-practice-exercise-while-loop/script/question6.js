// 5.

function GCD(num1, num2) {
    let factor = (num1 < num2) ? num1 : num2;
    while (factor >= 1) {
        if (num1 % factor === 0 && num2 % factor === 0) {
            return factor;
        } 
        factor--;
    } 
    
    // if one of the number is zero
    return (factor === num1) ? num2 : num1;
}

console.log(GCD(12, 18)); // Output: 6
console.log(GCD(48, 180)); // Output: 12
console.log(GCD(1, 13)); // Output: 1
console.log(GCD(7, 5));    // Output: 1 (because they are co-prime)
console.log(GCD(0, 15));   // Output: 15 (any number GCD with 0 is the number itself)
console.log(GCD(15, 15));  // Output: 15
