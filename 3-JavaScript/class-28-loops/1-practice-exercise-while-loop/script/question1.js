// Practice Exercise (while loop)

// 1.
console.log('Multiplication table');

function printMultiplicationTable (num) {
    let i = 1;    // initialization
    while (i <= 10) {     // condition
        console.log(`${num} x ${i} = ${num * i}`);
        
        i++;    // update
    }
}

let num = prompt('Enter the number for which table has to be generated:');
// prompt() function in JavaScript is used to gather input from the user  
// - The `prompt()` function opens a dialog box that asks the user for input.
// - It returns the input value (a string) if the user types something and clicks OK.
        // - If user types 23 in dialog box, it return '23' (in string format always)
// - If the user clicks "Cancel" or closes the prompt, `prompt()` returns `null`.

printMultiplicationTable(num);

// iterations: Number of times the loop runs. Eg. In above loop(while), 10 iterations took place.
// loop ka ek chakkar is one iteration
