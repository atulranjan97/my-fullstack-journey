// Deep comparison checks if all properties at every level are identical, including nested objects and arrays. It recursively evaluates the values of every property instead of just comparing references.

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;        // same reference or both null
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;       // different numbers of properties
    }

    for (let i = 0; i < keys1.length; i++) {
        // if (obj1[keys1[i]] !== obj2[keys1[i]]) {  
        if ( !deepEqual( obj1[keys1[i]], obj2[keys1[i]] ) ) {  
            return false;   
        }
    }

    return true;
}



// Eg 1: When properties of both objects are equal
let obj1 = { a: 1, b: 2, };
let obj2 = { a: 1, b: 2, };
console.log(deepEqual(obj1, obj2));      // Output: true
// Both objects have the same properties and values, so they are deeply equal.


// Eg 2: When properties of both objects are equal but order of those properties are different
let obj3 = { a: 1, b: 2, };
let obj4 = { b: 2, a: 1, };
console.log(deepEqual(obj1, obj2));      // Output: true
// Order of properties does not matter in objects, so they are still deeply equal.


// Eg 3: Nested objects 
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

console.log(deepEqual(student1, student2));      // Output: true





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

console.log(deepEqual(student3, student4));      // Output: true



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

console.log(deepEqual(student5, student6));      // Output: false


// Eg 3: Nested objects 
let student7 = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    address: {
        houseNo: 70,
        road: 'MG Road',
        city: 'New Delhi',
        state: 'Delhi',
    },
    subjects: ['Physics', 'Chemisty', 'Maths'],
    feesPaid: true,
    };
    
    let student8 = {
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
    
    console.log(deepEqual(student7, student8));      // Output: false