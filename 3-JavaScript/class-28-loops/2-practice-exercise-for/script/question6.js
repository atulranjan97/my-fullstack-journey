// Check if a number is prime or not.

num = 7;

function isPrime(num) {
    let i = 2;
    for (; i < num ; i++) {
        if (num % i === 0) {
            break;
        }
    }

    if (i === num) {
        return true;
    } else {
        return false;
    }
}

console.log(isPrime(7));
console.log(isPrime(47));
console.log(isPrime(2042));
console.log(isPrime(76543));
console.log(isPrime(1));
console.log(isPrime(0));
console.log(isPrime(-42));
