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
outer(78)(90);
// outer ka execution khtam ho chuka uske baad bhi outer ke variable ko log kar liya jata hai, outer function ke variables ki states ko lock kar leta hai and unko scope se bahar nahi jane deta


// agar across function hume kisi variable ki value maintain karni hai toh global variable iske liye acha tareeka nahi hai kyunki global variable humare global namespack ko pollute karta hai and koi bhi is variable ko redefine kar sakta hai
let createCounter = () => {
    let count = 0;
    return () => ++count;
    // inner function define hua, heap me store hua and then iska reference return ho gya along with closure
}

let counter = createCounter();
console.log(counter());     // Output: 1
console.log(counter());     // Output: 2
console.log(counter());     // Output: 3

let counter2 = createCounter();
console.log(counter2());    // Output: 1
  
console.log(counter());     // Output: 4