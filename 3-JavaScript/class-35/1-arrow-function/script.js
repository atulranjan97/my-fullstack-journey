// Normal function
function add1(num1, num2) {
    return num1 + num2;
}

console.log(add1(4, 6));


// Anonymous function
const add2 = function(num1, num2) {
    return num1 + num2;
}
console.log(add2(4, 9));



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