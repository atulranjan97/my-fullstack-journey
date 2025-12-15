console.log('Different methods of array');

// ---------Array methods---------
    // 1. isArray()
    // 2. length
    // 3. push(num1), pop(), shift(), unshift(num1, num2 ...)
    // 4. splice(startIndex, deleteCount, element1, element2, ..., elementN)
    // 5. toString()
    // 6. sort()
    // 7. valueOf()
    // 8. indexOf()
    // 9. find()
    // 10. slice()

// Array.isArray();     (checks if variable is an array)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let obj = {key1: 10, key2: 20, key3: 30}
console.log('isArray:',Array.isArray(arr));    // Output: isArray: true
console.log('isArray:',Array.isArray(obj));    // Output: isArray: false


// Length (property holds the size of the array)
console.log('Array length:', arr.length);       // Output: Array length: 9

// Common methods:
    console.log(arr);               // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    // 1. push/pop
        arr.push(15);           // Add element to end of the array
        console.log(arr);       // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
            
        // arr.pop()            // Remove last element from the array and return that removed element
        console.log(arr.pop());  // 15
        console.log(arr);       // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            
    // 2. shift/unshift
        // arr.shift();           // remove the first element from an array and return that removed element
        console.log(arr.shift());       // 1
        console.log(arr);       // Output: [2, 3, 4, 5, 6, 7, 8, 9]
        
        // arr.unshift(num1, num2...)
        arr.unshift(1);           // add elements to the beginning of the array
        console.log(arr);       // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

    
    // 3. splice
        // arr.splice(startIndex, deleteCount, element1, element2, ..., elementN);   // for modifying an array by removing, replacing, or adding elements at any position.

        // Remove 2 elements starting from index 1
        let removed = arr.splice(1, 2);             
        console.log(arr);       // Output: [1, 4, 5, 6, 7, 8, 9]

        // Add elements at index 1, without removing anything
        arr.splice(1, 0, 2, 3);
        console.log(arr);       // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

    
    // 4. toString 
            // built-in method that converts an object to a string representation. It is a part of JavaScript’s Object prototype, meaning that all objects (including arrays, numbers, etc.) inherit this method.
            console.log(arr.toString());  // Output: "1,2,3,4,5,6,7,8,9"
    

    // 5. sort
            // sorts the elements of the array in place, meaning that the original array is now ordered. Returns the sorted array (the same array, not a copy).
            let arr1 = [1, 12, 45, 11, 9, 0];
            arr1.sort();
            // sorted array ko return nahi karega, jis array ke liye sort ko call kiya hai usi ko sort kar dega
            // this method mutates the array, means that the original array is modified directly when you use the sort() method.


            console.log(arr1);      // Output: [0, 1, 11, 12, 45, 9]
            // by default `sort()` converts each number elements to string and sort them in dictionary order. That's why arr1 is not properly sorted here

            // By Default: sort() converts each element to a string and compares their UTF-16 character codes to determine their order. This can lead to unexpected results when sorting numbers.

    
    // 6. valueOf
            // returns the array itself as the object, not a primitive value
                console.log(arr.valueOf());  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] (array itself)

            
    // 7. indexOf
            // return index of the element in array

                const index = arr.indexOf(5);
                console.log('Index of 5:', index);      // Output: 6

                index = arr.indexOf(13);
                console.log('Index of 13:', index);      // Output: -1
                // -1 represent absence of element in array

        
    // 8. find (we will learn this in arrow function lecture)

        
    // 9. slice()
            //  the `slice()` method is used to extract a portion of an array or a string without modifying the original. It creates a shallow copy of the selected elements or characters.

            // Syntax: array.slice(start, end);

            // `start`: The starting index (inclusive). Defaults to 0 if not specified.
            // `end`: The ending index (exclusive). Defaults to the array length if not specified.
            // 1. Immutable: slice() does not change the original array or string.
            // 2. Negative Indexes: Start or end can be negative, counting from the end.
            // 3. Returns a Copy: Creates a new array or string for the extracted portion.

            let arr2 = [1, 2, 3, 4, 5];
            console.log(arr2.slice(1, 3)); // Output: [2, 3] (elements at index 1 and 2)
            console.log(arr2.slice(2));    // Output: [3, 4, 5] (from index 2 to the end)
            console.log(arr2.slice(-2));   // Output: [4, 5] (last two elements)
            console.log(arr2);             // Original array remains: [1, 2, 3, 4, 5]



// Array basically ek bani hui `class` hai, jiske ander by default bahut saare inbuilt properties and methods created hai by JS creator for our use. 

