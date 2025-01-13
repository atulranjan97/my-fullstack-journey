// Write a recursive function to find the sum of digits of a given positive integer n.


function digitSum(num) {
    // base case
    if (Math.floor(num / 10) === 0) {
        return num;
    }

    // recursive case
    return digitSum(Math.floor(num / 10)) + (num % 10);
}

console.log(digitSum(425));
console.log(digitSum(4));
console.log(digitSum(0));
console.log(digitSum(75));