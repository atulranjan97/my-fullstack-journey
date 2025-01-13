
// - Shallow comparison checks if the top-level properties of two objects are equal. It does not evaluate nested objects or arrays — it only checks if the references are the same.


function shallowEqual(obj1, obj2) {
    // check if both are objects and not null
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null ) {
        return false;
    }
    
    // compare the number of properties
    const keys1 = Object.keys(obj1);    // `Object.keys` retrieves an array of keys from an object's enumerable properties.
    const keys2 = Object.keys(obj2);
    // If the objects have different numbers of keys, they are not equal
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    // compare each property value (Check if any property value is not equal; return false as soon as a mismatch is found)
    for (let i = 0; i < keys1.length; i++) {
        if (obj1[keys1[i]] !== obj2[keys1[i]]) {  // using square bracket notation to access object's properties since we don't know if key contains special character or not
            return false;   // Exit early when a mismatch is found
        }
    }
    
    // we can also use for-of loop instead
    // for (let key of keys1) {
    //     if (obj1[key] !== obj2[key]) {
    //         return false; // Exit early when a mismatch is found
    //     }
    // }

        
    return true;
}
// we are looking for mismatches, exiting early if any mismatch is found.


// Eg 1: When properties of both objects are equal
    let obj1 = { a: 1, b: 2, };
    let obj2 = { a: 1, b: 2, };
    console.log(shallowEqual(obj1, obj2));      // Output: true
    // Both objects have the same properties and values, so they are shallowly equal.


// Eg 2: When properties of both objects are equal but order of those properties are different
let obj3 = { a: 1, b: 2, };
let obj4 = { b: 2, a: 1, };
console.log(shallowEqual(obj1, obj2));      // Output: true
// Order of properties does not matter in objects, so they are still shallowly equal.


// Eg 3: Nested objects - shallow comparison fails
let student1 = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    address: {
        houseNo: 70,
        road: 'Hastsal Road',
        city: 'New Delhi',
        state: 'Delhi',
    },
    subjects: ['Physics', 'Chemisty', 'Maths'],
    feesPaid: true,
};

let student2 = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    address: {                                      
        houseNo: 70,
        road: 'Hastsal Road',
        city: 'New Delhi',
        state: 'Delhi',
    },
    subjects: ['Physics', 'Chemisty', 'Maths'],     
    feesPaid: true,
};

console.log(shallowEqual(student1, student2));      // Output: false
// Even though the properties and values look the same, the `address` and `subjects` are objects and arrays, respectively. They are different references in memory, so shallow comparison returns false.




// Eg 4: Nested objects with shared references
let student3 = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    address: {
        houseNo: 70,
        road: 'Hastsal Road',
        city: 'New Delhi',
        state: 'Delhi',
    },
    subjects: ['Physics', 'Chemisty', 'Maths'],
    feesPaid: true,
};

let student4 = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    address: student3.address,      // Shared reference to the same object
    subjects: student3.subjects,    // Shared reference to the same array
    feesPaid: true,
};

console.log(shallowEqual(student3, student4));      // Output: true
// Here, the `address` and `subjects` properties in `student3` and `student4` are pointing to the same memory references. Since shallow comparison checks references, it returns true.


// Eg: 5
let student5 = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    address: {
        houseNo: 70,
        road: 'Hastsal Road',
        city: 'New Delhi',
        state: 'Delhi',
    },
    subjects: ['Physics', 'Chemisty', 'Maths'],
    feesPaid: true,
};

// Modifying properties of the shared references
student5.address.road = 'MG Road';          // Updating the road in the nested address object
student5.subjects[1] = 'Computer Science';  // Changing a subject in the shared array

let student6 = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    address: student5.address,      // Shared reference to the same address object
    subjects: student5.subjects,    // Shared reference to the same address object 
    feesPaid: true,
};

// Since both `student5` and `student6` share the same references for `address` and `subjects`,
// shallowEqual considers them equal even though the nested data has been modified.
console.log(shallowEqual(student5, student6));      // Output: true
