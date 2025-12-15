// 1. map()
        // array method
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





// 2. filter()
        // array method
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



// 3. reduce()
        // array method
        // reduces the elements of an array to a single value by repeatedly applying a function to each element, carrying over an accumulator (a running total or result).

        /* Syntax: 
                array.reduce((accumulator, currentValue, currentIndex, array) => {
                        // return the new accumulator value
                }, initialValue);

                Parameters:
                        1. accumulator → the running total or result (it carries the previous return value).
                        2. currentValue → the current element being processed.
                        3. currentIndex → (optional) index of the current element.
                        4. array → (optional) the array reduce() is called on.
                        5. initialValue → (optional but important) the initial value for the accumulator.
        
        */

        /* 
                Example 1: Sum of Numbers

                        const numbers = [1, 2, 3, 4, 5];
                        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
                        console.log(sum); // 15

                        How it works:
                                | Step | acc | curr | Result |
                                | ---- | --- | ---- | ------ |
                                | 1    | 0   | 1    | 1      |
                                | 2    | 1   | 2    | 3      |
                                | 3    | 3   | 3    | 6      |
                                | 4    | 6   | 4    | 10     |
                                | 5    | 10  | 5    | 15     |
                
                                

                Example 2: Find the Maximum Value

                        const nums = [10, 25, 8, 100, 60];
                        const max = nums.reduce((acc, curr) => (curr > acc ? curr : acc));
                        console.log(max); // 100

                                When you call reduce() without an initial value, JavaScript automatically uses:
                                the first element of the array (10) as the initial accumulator (acc), and
                                starts iterating from the second element (index 1).

                        How it works:
                                | Step | Index | acc | curr | Comparison   | New acc |
                                | ---- | ----- | --- | ---- | ------------ | ------- |
                                | 1    | 1     | 10  | 25   | 25 > 10  ✅  | 25      |
                                | 2    | 2     | 25  | 8    | 8 > 25   ❌  | 25      |
                                | 3    | 3     | 25  | 100  | 100 > 25 ✅  | 100     |
                                | 4    | 4     | 100 | 60   | 60 > 100 ❌  | 100     |
                        Final result = 100



        */


        
// 4. split()
        // string method
        // turns string into an array
        // returns an array

        let fruits = "apple mango banana cherry";
        let fruitArr = fruits.split(' ');
        console.log(fruitArr);          // [ 'apple', 'mango', 'banana', 'cherry' ]


// 5. join()
        // array method
        // turns an array into an string
        // return a string

        let arr2 = fruitArr.join(' ');
        console.log(arr2);      // apple mango banana cherry