// ------------------------------------------------------------------------ `.entries()` in JavaScript ------------------------------------------------------------------------
// The `.entries()` method is used to get an iterator of key-value pairs from an array or an object-like structure.

// 1) `.entries()` with Arrays
// Returns an iterator of [index, value] pairs.
const arr = ["a", "b", "c"];
console.log('arr.entries():', arr.entries());       // arr.entries(): Array Iterator {...}  
for (let [index, value] of arr.entries()) {
  console.log(index, value);
}


// 2) `.entries()` with Objects (Object.entries())
// Converts an object into an array of `[key, value]` pairs.
// Returns an array that can be looped with `for...of`.
const obj = { name: "Atul", age: 25 };
console.log(Array.isArray(Object.entries(obj)));  // true
console.log('object.entries(obj):', Object.entries(obj));       // object.entries(obj): [ [ 'name', 'Atul' ], [ 'age', 25 ] ] 
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}


// 3) `URLSearchParams.entries()` (for Query Strings)
// Works with query strings in URLs.
// Returns an iterator, not an array (but behaves similarly in `for...of`).
// Iterator → A special object that generates values one at a time when requested and don’t store everything in memory.
const params = new URLSearchParams("name=Atul&age=25");
// It returns a URLSearchParams object that stores the key–value pairs from the string.
// JavaScript does NOT return a string or an object you can directly see.
// It returns a special built-in object designed to work with URL data.
  // Internally, it holds:
  // name → "Atul"
  // age → "25"

console.log(params);  // URLSearchParams { 'name' => 'Atul', 'age' => '25' } (This is just how Node.js displays it.)
console.log(params.entries()); // Output: URLSearchParams Iterator {['name': 'Atul'], ['age', '25']}
for (let [key, value] of params.entries()) {
  console.log(key, value);
}
// Even though `params.entries()` is not an array, `for...of` still works because it yields values one by one.


// Query string: A query string is the part of a URL that contains key-value pairs, used to send data to the server. It comes after a `?` and uses `&` to separate multiple parameters.
// eg: https://example.com/search?query=javascript&page=2


/*
URLSearchParams is a built-in JavaScript object used to read, create, and update query parameters in a URL (the part after ?).

new URLSearchParams("name=Atul&age=25") returns:
  -> a URLSearchParams object
  -> containing parsed key–value pairs
  -> accessed using built-in methods, not direct property access
*/