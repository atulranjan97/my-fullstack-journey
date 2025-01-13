console.log('AND Operator');
console.log('true && true is', true && true);
console.log('true && false is', true && false);
console.log('false && true is', false && true);
console.log('false && false is', false && false);

console.log('OR Operator');
console.log('true || true is', true || true);
console.log('true || false is', true || false);
console.log('false || true is', false || true);
console.log('false || false is', false || false);

console.log('NOT Operator');        // unary operator
console.log('!true is', !true);
console.log('!false is', !false);
console.log('!!true is', !!true);
console.log('!!false is', !!false);


// Example
if (num > 0 && num % 2 === 0) {
    console.log('Positive and Even number');
} else if (num > 0) {
    console.log('Positive and Odd number');
} else if (num < 0) {
    console.log('Negative number');
} else {
    console.log('Number is zero');
}