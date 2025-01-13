// Write a recursive function to calculate x raised to the power of n (i.e., x^n).

function power(base, exponent) {
    // base case
    if (exponent === 0) {
        return 1;
    }

    // recursive case
    return power(base, (exponent-1)) * base;
}

console.log(power(5, 3));
console.log(power(3, 0));
console.log(power(0, 4));