let a = true;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: true is truthy


a = false;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: false is falsy


a = 7;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: 7 is truthy


a = -24;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: -24 is truthy


a = 0.4;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: 0.4 is truthy


a = 0;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: 0 is falsy


a = 'atul';
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: atul is truthy


a = '';
if(a) {
    console.log("'' is truthy");
}
else{
    console.log("'' is falsy");
}
// Output: '' is falsy


a = [];
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: [] is truthy


a = {};
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: {} is truthy

/*
    `a = {}` → You assign an empty object to a.
    In JavaScript, the if condition checks the truthiness of the value.
    a is {} (an object).
    Objects are always truthy (even if empty).
    An empty object is truthy because only 7 specific primitive values are falsy in JavaScript. Everything else, including all objects (even {}), is truthy by design.
    
    When JavaScript evaluates something in a boolean context (if, while, &&, etc.), it internally calls the ToBoolean conversion (defined in the ECMAScript spec).
    Only these falsy values exist:
        false
        0, -0
        0n (BigInt zero)
        "" (empty string)
        null
        undefined
        NaN
    Everything else is truthy.
*/


a = null;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: null is falsy


a 
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: undefined is falsy


a = NaN;
if(a) {
    console.log(a, 'is truthy');
}
else{
    console.log(a, 'is falsy');
}
// Output: NaN is falsy



