let globalVar = 56;

let outer = (outerArg) => {
    const outerVar = 3.14;

    let inner = (innerArg) => {
        const innerVar = 2.71;
        console.log(`globalVar: ${globalVar}`)
        console.log(`outerArg: ${outerArg}`)
        console.log(`outerVar: ${outerVar}`)
        console.log(`innerArg: ${innerArg}`)
        console.log(`innerVar: ${innerVar}`)
    }
    
    return inner;
}


const inner = outer(78);
inner(90);

// is same as

// outer(78)(90);
// outer ka execution khtam ho chuka uske baad bhi outer ke variable ko log kar liya jata hai, outer function ke variables ki states ko lock kar leta hai and unko scope se bahar nahi jane deta



// agar across function hume kisi variable ki value maintain karni hai toh global variable iske liye acha tareeka nahi hai kyunki global variable humare global namespace ko pollute karta hai and koi bhi is variable ko access karke redefine kar sakta hai
let createCounter = () => {
    let count = 0;
    return () => ++count;
}
// The actual function definition is stored in the heap because functions are objects in JavaScript.

let counter = createCounter();
// When `createCounter` is called, a new inner function definition `() => ++count` is stored in heap, Also an anonymous object containing the lexical environment of `createCounter` (where count = 0).` is created inside heap. JS binds this inner function definition with this object (means inner function started refering to this object)
// Thus, A closure is created by binding the inner function to the lexical environment of `createCounter`, which includes count.

// The `counter` variable now points to the inner function, along with its closure.
/*
    A closure is a term used to describe the combination of:
        1. The inner function (the function definition).
        2. The lexical environment object (which contains variables from the outer function's scope).
        Together, they allow the inner function to access those variables even after the outer function has executed.
*/

// the counter variable stores the definition of the inner function, along with its closure (the environment where count is stored).
// JavaScript assigns memory for the lexical scope of a function when the function is created, not when it is executed. This happens at the time the inner function is returned by createCounter.

// a closure is not created if a function is not returned or otherwise preserved.

console.log(counter());     // Output: 1
console.log(counter());     // Output: 2
console.log(counter());     // Output: 3

let counter2 = createCounter();
console.log(counter2());    // Output: 1
  
console.log(counter());     // Output: 4


// for detailed explanation, refer notion notes: https://www.notion.so/Closure-183052c4d3f98056ad78fa3ef92f40ab