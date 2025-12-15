// Syntax for template literals: String enclosed by backticks(`) instead of single or double quotes.
let greeting = `Hello World`;

// Multi-line Strings:

// can't create multi-line string using single quotes('').
// let string1 = 'This is a
// multiline string.';

// can't create multi-line string using double quotes('').
// let string2 = "This is a
// multi-line string.;

let string3 = `This is a
multi-line string.`;
// Allows creating multi-line string without the need for escape charaters.



// String Interpolation:

let firstName = 'Atul';
let hello = `Hello, ${firstName}!`;



// Expression Evalutation:
let a = 5;
let b = 10;
let result = `The sum of a and b is ${a+b}.`;
// Supports embedding any valid JavaScript expression, including arithmatic expression, function calls, and ternary operations.


/*
    "Template literals in JavaScript are string literals enclosed by backticks ( ` ` ) instead of quotes. They let you embed expressions with ${}, support multi-line strings, and allow string interpolation without using + for concatenation."

    "Template literals are backtick strings in JS that allow interpolation with ${}, multi-line strings, and more flexible string formatting."
*/