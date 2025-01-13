// 1. 
let arr = [5, 6]; 
console.log(arr);   // Output: [ 5, 6 ]

arr.unshift(4);
console.log(arr);   // Output: [ 4, 5, 6 ]

arr.push(7);
console.log(arr);   // Output: [ 4, 5, 6, 7 ]


// 2. Create a method to return an element at a particular position in the array.
function getElementAt(arr, index) {
    if (arr.length === 0 || index < 0 || index >= arr.length) {
        return;
    }
    return arr[index];
}

console.log(getElementAt([1,2,3,4,5], 2));  // Output: 3
console.log(getElementAt([1,2,3,4,5], -2)); // Output: undefined
console.log(getElementAt([1,2,3,4,5], 5));  // Output: undefined
console.log(getElementAt([1,2,3,4,5], 8));  // Output: undefined
console.log(getElementAt([], 8));           // Output: undefined


// 3. Create an array copy using slice method.
function createArrayCopy(arr) {
    return arr.slice();
}

console.log(createArrayCopy([2, 5, 4, 6, 1, 9, 7, 1]));
console.log(createArrayCopy([]));
console.log(createArrayCopy([4]));

// 4.
let arr3 = ['KG', 'Coding', 'Javascript', 'Course', 'Is', 'Best'];
let concat = '';
arr3.forEach(element => {
    concat += ` ${element}`;
});

console.log(concat);