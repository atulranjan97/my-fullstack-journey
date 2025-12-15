// Normal function
function add1(num1, num2) {
    return num1 + num2;
}

console.log(add1(4, 6));



// Anonymous function Assigned to a Variable
const add2 = function(num1, num2) {
    return num1 + num2;
}
console.log(add2(4, 9));
    /*
        Here:
            * The function has no declared name in its definition (function() ← no name).
            * But JavaScript assigns an inferred name based on the variable (add2).
    */

    // So:
        console.log(add2.name);     // "add2"
        //  The function’s `.name` property now shows "add2", but it’s still technically an anonymous function expression (the name wasn’t written in the function declaration).
        // When you assign an anonymous function to a variable, it remains anonymous in definition, but JavaScript automatically assigns the variable’s name to its `.name` property for convenience (not as a true declared name).



// Arrow function: (A concise way to write anonymous function)
const add3 = (num1, num2) => {
    return num1 + num2;
}
console.log(add3(8, 9));


// For single argument: Round bracket is optional
const square = num => {
    return num * num;
}
console.log(square(12));

// For single line: Curly brackets and return(keyword) is optional 
const square1 = num =>  num * num;
console.log(square(13));



// Applications of arrow
    // 1.  Often used when passing functions as an arguments
        const numbers = [2, 4, 6, 8, 10];

        let cube = numbers.map(function (num) {
                return num * num * num;
        });
        // is same as
        let cube1 = numbers.map(num => num * num * num);