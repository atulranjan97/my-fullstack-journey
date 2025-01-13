// 1.

function inputPositiveNumber() {
    let num;    // initialization
    do {
        num = prompt('Enter a positive number:');
    } while (num < 0);  // condition

    return num;
}
// This is one of the examples of loop where `update` in not needed so we can skip it

let num = inputPositiveNumber();
console.log(`The positive number entered is; ${num}`);
