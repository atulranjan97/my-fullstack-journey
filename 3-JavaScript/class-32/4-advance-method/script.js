// 1. map
        // syntax: array.map(function(value) {return newValue;})
        // Use: Transforms each element
        // Returns a new array of the same length.
        // Does NOT mutate the original array (ie. Original array remains unchanged.)
let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.map(function(item) {
    return item * item;
})

console.log(arr);           // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(newArr);        // Output: [1, 4, 9, 16, 25, 36, 49]





// 2. filter
            // syntax: array.filter(function(value) {return true/false})
            // Use: Filter elements based on condition
            // Returns a new array with elements that satisfy the condition.
            // Does NOT mutate the original array.
            // If no elements pass, it returns an empty array.
newArr = arr.filter(function(item) {
    return item % 2 === 0;
})

console.log(arr);           // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(newArr);        // Output: [2, 4, 6]