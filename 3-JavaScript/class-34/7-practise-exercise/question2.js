// 2. Write a function that takes two objects as input and returns true if they have identical contents using `JSON serialization`. Test your function with objects containing different data types and explain any limitation.

function areIdenticalUsingSerialization(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) { return true; }
}

// Test cases:
// Identical objects with simple properties
const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Alice", age: 25 };
console.log(areIdenticalUsingSerialization(obj1, obj2)); // true

// Objects with different key orders
const obj3 = { age: 25, name: "Alice" };
console.log(areIdenticalUsingSerialization(obj1, obj3)); //  (key order doesn't matter in JSON)     

const obj4 = { name: "Bob", age: 30 };
console.log(areIdenticalUsingSerialization(obj1, obj4)); 

// Objects with arrays
const obj5 = { colors: ["red", "blue"], size: "large" };
const obj6 = { colors: ["red", "blue"], size: "large" };
console.log(areIdenticalUsingSerialization(obj5, obj6)); // true

const obj7 = { colors: ["blue", "red"], size: "large" };
console.log(areIdenticalUsingSerialization(obj5, obj7)); // (arrays order matters in JSON)

const obj8 = { colors: ["red", "blue"], size: "medium" };
console.log(areIdenticalUsingSerialization(obj5, obj8)); // false

// Objects with nested objects
const obj9 = { name: "Alice", address: { city: "New York", zip: "10001" } };
const obj10 = { name: "Alice", address: { city: "New York", zip: "10001" } };
console.log(areIdenticalUsingSerialization(obj9, obj10)); // true

const obj11 = { name: "Alice", address: { city: "New York", zip: "10002" } };
console.log(areIdenticalUsingSerialization(obj9, obj11)); // false

// Objects with special characters
const obj12 = { str: "hello\nworld", num: 123 };
const obj13 = { str: "hello\nworld", num: 123 };
console.log(areIdenticalUsingSerialization(obj12, obj13)); // true

// Objects with dates
const obj14 = { date: new Date("2024-01-01") };
const obj15 = { date: new Date("2024-01-01") };
console.log(areIdenticalUsingSerialization(obj14, obj15)); // true

const obj16 = { date: new Date("2024-01-02") };
console.log(areIdenticalUsingSerialization(obj14, obj16)); // 

// Objects with functions (will not be serialized)
const obj17 = { greet: function() { return "Hello"; } };
const obj18 = { greet: function() { return "Hello"; } };
console.log(areIdenticalUsingSerialization(obj17, obj18)); // true (functions are not serialized in JSON) 