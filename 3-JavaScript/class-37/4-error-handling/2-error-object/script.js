// `Error` naam ki class(or constructor function) JS humein provide karti hai, we can call it with `new` keyword to create an error object and use it to create errors of our own.

const error = new Error('Something went wrong');
console.log(error.name);        // "Error"
console.log(error.message);     // "Something went wrong"

// JS provides the Error object for creating and handling errors.
// The Error objects includes properties like `name` and `message` to describe the error.