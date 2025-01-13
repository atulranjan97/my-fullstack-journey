// existing error ko inherit karke child error bana sakte hai
// hum khudka error class create kar sakte hai (by extending the built-in Error class) and usme apne khud ke custom error as properties rakh sakte hai.

// You can create custom error types by extending the build-in `Error` class.
// This is useful for defining specific error types in your application

class ValidationError extends Error {
    constructor(message) {
        super(message);     // parent class `Error` ki properties inherit ho jayengi is child class me
        // name = 'Error'       // this property will be inherited from parent class `Error` 
        // message = 'Input is required';   // this property will be inherited from parent class `Error` 

        // property overriding
        this.name = 'ValidationError';
    }
}

function validate(input) {
    if (!input) {
        throw new ValidationError('Input is required');
    }
}


validate('');   
// Error can be handled using try...catch