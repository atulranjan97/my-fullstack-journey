// for...of
/*
Purpose: Iterates over iterable objects like arrays, strings, maps, sets, etc.
        `for...of` cannot be used directly on objects, because objects are not iterable. (explain at the very bottom of this file)

Syntax:
    for (const element of array) {
        // logic
    }

Key Features:
    1. Can be used with `break`, `continue`, and `return`.
    2. More flexible for controlling flow.
    3. No callback needed unlike `forEach`

// `for...of` is the true alternative to traditional loops (for, while) because it provides loop control (`break`, `continue`, etc.), which is not possible with `forEach`. 

*/

for (const num of [1, 2, 3]) {
    if (num === 2) continue; // Skips 2
    console.log(num);
}
// Output: 1, 3

//  use `for...of` when you need control over the loop.




/*  (Important)
1. `for...of` cannot be used directly on objects, because objects are not iterable.

2. To iterate over objects using `for...of`, first convert them into an iterable form (keys, values, or entries). 

3. If you need to work directly with object keys, `for...in` can be an alternative. However, be cautious with `for...in`, as it also iterates over inherited properties unless you filter them using `hasOwnProperty()`.
*/