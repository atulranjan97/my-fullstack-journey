function getFactorial(num) {
    // Base case: factorial of both 0 and 1 is 1
    if (num === 1 || num === 0) return 1;
    
    // Recursive case: n! = n * (n-1)!
    return num * getFactorial(num - 1);
}

console.log(getFactorial(8));