// Purpose: Iterates over arrays. (this is more like an iterator rather than a loop)
/*
Syntax:
    array.forEach((element, index) => {
            // logic
        });
    
`forEach` is not the alternative to traditional loops (for, while) because it doesn't provides loop control (`break`, `continue`, etc.).

Key Features:
    1. Executes a callback function for each element in the array.
    2. You cannot use `break`, `continue`, or `return` to control the loop.
    3. Always iterates through the entire array.
    

*/

let arr = [12, 5, 9, 13, 23, 3];
arr.forEach(function(item) {
    console.log('forEach:', item);
})
/* Output:  forEach: 12
            forEach: 5
            forEach: 9
            forEach: 13
            forEach: 23
            forEach: 3
*/


// second parameter is for index(optional)
arr.forEach(function(item, i) {
    console.log('forEach:', item, i);
})
/*  Output: forEach: 12 0
            forEach: 5 1
            forEach: 9 2
            forEach: 13 3
            forEach: 23 4
            forEach: 3 5
*/


// 2. You cannot use `break`, `continue`, or `return` to control the loop.
// Using `return` is similar to `continue` in traditional loop as it skips the callback and get us out of this loop
arr.forEach(function(item, i) {
    if (i === 2) return;
    console.log('forEach:', item, i);
})
/* Output:  forEach: 12 0
            forEach: 5 1
            forEach: 13 3
            forEach: 23 4
            forEach: 3 5
*/


/* When to use this over `traditional loop` or `for...of loop`? 
    when we need to perform an action on each array element and don't need to break early.

Use `traditional loop` or `for...of` loop when you need control over the loop.
*/


// `for...of` is the true alternative to traditional loops (for, while) because it provides loop control (`break`, `continue`, etc.), which is not possible with `forEach`.
