// Refer notes for detailed info

console.log('Hi' + 44);     // output: Hi44
// here js type coerces number to string

console.log('66' + 44);     // output: 6644
// here js type coerces number to string

console.log('66' - 44);     // output: 22
// here js type coerces string to number


console.log(true == 1);     // output: true
console.log(true == 2);     // output: false
// js type coerces boolean value to number, true converts to 1 and false converts to 0 








// type coercion unpredictable lagta hai but hai nahi if you know the rules
// try to avoid this situation(type coercion) by writing code which is easy to understand 

// strict equality(=== or !==) restrict type coercion, it first compares types and if it matches only then it compares the value