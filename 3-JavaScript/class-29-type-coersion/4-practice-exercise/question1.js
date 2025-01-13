// Write a recursive function to print all numbers from 1 to N.
function printTillN(num) {
    // base case
    if (num === 0) {
        return;
    }

    // recursive case
    printTillN(num - 1);
    console.log(num);    
}

printTillN(5);