
// 3.
console.log('Factorial of a number');

function getFactorial (num) {
    let i = 1;  // initialization
    let result = 1;
    while (i <= num) {  // condition
        result *= i; 
        i++;    // update
    }
    return result;
}

let num = prompt('Enter the number for which factorial has to be calculated');
console.log(getFactorial(num));
