// 4. Write a function that `merges two objects`. If the same property exists in both objects, use the value from the second object. Test this function with objects that have both overlapping and unique properties. 

function mergeObjects(obj1, obj2) {  
    return {...obj1, ...obj2};
}
//  it performs a shallow merge.

// Test cases
// Test: Objects with Unique Properties
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const result = mergeObjects(obj1, obj2);
console.log(result); 
// Expected: { a: 1, b: 2, c: 3, d: 4 }


// Test: Objects with Overlapping Properties
const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };
const result2 = mergeObjects(obj3, obj4);
console.log(result2); 
// Expected: { a: 1, b: 3, c: 4 }


// Test: One Object is Empty
const obj5 = {};
const obj6 = { a: 5, b: 6 };
const result3 = mergeObjects(obj5, obj6);
console.log(result3); 
// Expected: { a: 5, b: 6 }


// Test: Both Objects are Empty
const obj7= {};
const obj8 = {};
const result4 = mergeObjects(obj7, obj8);
console.log(result4); 
// Expected: {}


// Test: Nested Object Properties
const obj9 = { a: 1, b: { x: 10, y: 20 } };
const obj10 = { b: { x: 30 }, c: 4 };
const result5 = mergeObjects(obj9, obj10);
console.log(result5); 
// Expected: { a: 1, b: { x: 30 }, c: 4 }


// Test: Properties with Array Values
const obj11 = { a: [1, 2], b: 2 };
const obj12 = { a: [3, 4], c: 3 };
const result6 = mergeObjects(obj11, obj12);
console.log(result6); 
// Expected: { a: [3, 4], b: 2, c: 3 }
