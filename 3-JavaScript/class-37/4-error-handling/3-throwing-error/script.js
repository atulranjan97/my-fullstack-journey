// `Error` naam ki class(or constructor function) JS humein provide karti hai, we can call it with `new` keyword to create an error object and use it to create errors of our own.

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
        // We can use the `throw` statement to throw an error manually.
        // Thrown errors can be caught and handled by a try...catch block.
    }
    return a / b;
}

console.log(divide(6, 3));  // Output: 2

console.log(divide(6, 0));  // Error: Divide by zero
// Now this error can be handled using try-catch

console.log(divide(3, 6));  // this line will never get executed as the line above it got an error which is created and thrown by us.

// JS provides the Error object for creating and handling errors. 
// `The Error object` includes properties like name and message to describe the error.