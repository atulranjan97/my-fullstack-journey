// Object equality

// 1. Using `==` and `===`
    let a = {firstName: 'Paul', lastName: 'Phoenix'};
    let c = {firstName: 'Paul', lastName: 'Phoenix'};
    let b = a;
    console.log(a == b)     //  Output: true    
    // Explanation: a and b are referring to the same object in memory (b is a reference to a).
    // Even though the `==` operator checks for equality, when comparing objects, it compares references (not the values).
    // Since a and b are the same reference, the result is `true`.

    console.log(a === b)    //  Output: true
    // Explanation: `===` checks for both value and type equality. For objects, it checks if they refer to the same memory location.
    // Since a and b reference the same object, the result is `true`.

    console.log(a == c)     //  Output: false
    // Explanation: a and c have the same properties and values, but they are different objects in memory.
    // `==` compares the **references**, not the values. Since a and c are different objects, the result is `false`.

    console.log(a === c)    //  Output: false
    // Explanation: Again, a and c have the same content, but they are **different** objects in memory.
    // `===` checks for strict equality (both value and reference). Since a and c are distinct objects, the result is `false`.

    // Note: we do not compare methods of object, only compare properties.


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
    firstName: 'Alok',
    lastName: 'Ranjan',
    age: 31,
    address: {
        houseNo: 10,
        road: 'Abdul Kalam Road',
        city: 'Varansi',
        state: 'Uttar Pradesh',
    },
    subjects: ['History', 'Geography', 'Economics'],
    feesPaid: true,
};

/* - Shallow comparison checks if the top-level properties of two objects are equal. It does not evaluate nested objects or arrays — it only checks if the references are the same.

For student1 and student2:
    - Primitive properties like firstName, lastName, age, and feesPaid will be compared by value. If these values are identical, the comparison will consider them equal for these properties.
    - For address and subjects, shallow comparison will check if the references are the same (i.e., whether both objects point to the same memory location). Even if their contents are identical, they will be considered not equal because their references are different.

Example Behavior:
    - If you shallow compare student1.address and student2.address, it will return false, even if their properties are identical.
    - Similarly, the subjects arrays will be considered unequal, even if they contain the same elements in the same order.
*/

/*  Deep Comparison
Deep comparison checks if all properties at every level are identical, including nested objects and arrays. It recursively evaluates the values of every property instead of just comparing references.

For student1 and student2:
    - Primitive properties (firstName, lastName, age, feesPaid) will be compared by value, just like in a shallow comparison.
    - For nested objects like `address`, a deep comparison will recursively compare each property (houseNo, road, city, state) to check if their values are equal.
    -For arrays like `subjects`, it will compare each element to ensure the arrays have the same contents in the same order.

Example Behavior:
    - If the `address` properties of `student1` and `student2` have identical values for houseNo, road, city, and state, deep comparison will consider them equal.
    - If the `subjects` arrays of both students have the same elements in the same order, they will also be considered equal in a deep comparison.
*/





// 2. Object equality using JSON

    const obj1 = { name: 'Atul', age: 28 };
    const obj2 = { age: 28, name: 'Atul' };

    console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // false (different key order)
    // so, JSON.stringify is not the reliable way to compare two objects because two objects with the same keys and values but in different orders will be considered different when compared using JSON.stringify.

    /* Ideal Comparison for Objects:
        - Equality Based on Values: Two objects with the same keys and values should be considered equal, regardless of the order of properties.
        - Handling Nested Objects: The comparison should be deep, meaning all nested properties should also be compared, not just references or top-level values.
        - Ignoring Property Order: In this ideal scenario, the comparison should ignore the order of properties, meaning { a: 1, b: 2 } and { b: 2, a: 1 } should be considered equal.
    */



    // Circular Reference in Objects:
    // A circular reference occurs when an object references itself directly or indirectly through its properties, creating an infinite loop. This can happen when an object contains a property that points back to the object itself, directly or through other nested objects.

    // Example of Circular Reference:
    let obj5 = {};
    obj1.self = obj5; // obj1 references itself (circular reference)

    // How JSON.stringify Fails:
    // Issue: JSON.stringify cannot handle circular references. If you try to stringify an object with a circular reference, it will throw a TypeError because it will enter an infinite loop while trying to serialize the object.