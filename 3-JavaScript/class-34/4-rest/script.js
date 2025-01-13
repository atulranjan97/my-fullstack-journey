// 1. Represented by three dots(...), the rest operator is used to collect multiple elements into a single array or object.
// 2. Allow a function to accept an indefinite number of arguments as an array

// we use rest operator if we want variable number of arguments in function parameter
function sum(...numbers) {
    
}

console.log(sum(1, 2, 3, 4));


// Used to collect the remaining properties of an object after extracting some properties
    // Object destructuring
    const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4 };
    console.log(a);         // Output: 1
    console.log(b);         // Output: 2
    console.log(rest);      // Output: {c: 3, d: 4}


// Used to collect the remaining element of an array after extracting some elements
    let even = [2, 4, 6, 8, 10];

    // Array destructuring
    let [first, second, ...remainingNumbers] = even;
    console.log('First:', first)                             // Output: First: 2
    console.log('Second:', second)                           // Output: Second: 4
    console.log('Remaining Numbers:', remainingNumbers);     // Output: Remaining Numbers: [ 6, 8, 10 ]