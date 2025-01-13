// 4. Create a program that computes the sum of the digits of an integer.

function digitsSum(num) {
    if (!Number.isInteger(num)) {
        return "Input must be a valid integer.";
    }
    
    if (num < 0) {
        num *= -1;
    }
    
    let sum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(digitsSum(2546));
console.log(digitsSum(6));
console.log(digitsSum(0));
console.log(digitsSum(-683));
console.log(digitsSum(-1));
// Edge cases
console.log(digitsSum(23.78));
console.log(digitsSum('56'));
console.log(digitsSum(NaN));