// Create a function to calculate Fibonacci element using recursion.


function nthFibo(num) {
    // base case
    if (num === 0) {
        return 0;
    }

    if (num === 1) {
        return 1;
    }

    if (num < 0) {
        return 'Invalid input: only poistive number allowed';
    }
    
    // recursive case
    return nthFibo(num - 2) + nthFibo(num - 1);
}

console.log(nthFibo(0));
console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(5));
console.log(nthFibo(8));
console.log(nthFibo(-2));