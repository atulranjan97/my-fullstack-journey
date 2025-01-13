// Write a recursive function to find the greatest common divisor (GCD) of two numbers a and b.

function GCD(num1, num2) {
    if (num1 === 0 && num2 === 0) {
        return "Invalid input: Atleast one number must be a non-zero value";
    }

    if (num1 === 0 || num2 === 0) {
        return num1 !== 0 ? num1 : num2;
    }

    let factor = num1 <= num2 ? num1 : num2;

    return (function HCF(fact) {
        // recursive case
        if (num1 % fact === 0 && num2 % fact === 0) {
            return fact;
        }

        return HCF(fact - 1);
    })(factor);

}

console.log(GCD(12, 18));   // Output: 6
console.log(GCD(48, 180));  // Output: 12
console.log(GCD(1, 13));    // Output: 1
console.log(GCD(7, 5));     // Output: 1 (because they are co-prime)
console.log(GCD(0, 15));    // Output: 15 (any number GCD with 0 is the number itself)
console.log(GCD(15, 15));   // Output: 15
console.log(GCD(0, 0));     // Invalid input
