// Array Expansion
const arr1 = [5, 6];     // [5, 6]
console.log(arr1);          

const arr2 = [...arr1];     // [5, 6]    
console.log(arr2);      

const arr3 = [3, 4, ...arr1];    // [3, 4, 5, 6]
console.log(arr3);

const arr4 = [arr3, 7, 8];   // [3, 4, 5, 6, 7, 8]
console.log(arr4);

const arr5 = [1, 2, arr4, 9, 10];   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr5);




// Object Expansion
let obj1 = {a: 1, b: 2,};
let obj2 = {...obj1, c: 3,}     // {a: 1, b: 2, c: 3}



// Function Arguments


// bahut baar programmer apna array/object pass karna chahte hai function me but kyunki call by reference hai and samne wala function trustworthy hai ya nahi ye nahi pata, agar voh function data ke sath chhed chhad karega to is programmer ka array/object toh change nahi ho jayega which he doesn't want that, toh generally jo caller hai vo aisi situation ko avoid karne ke liye apne array/object ki copy banata hai(using spread operator) and then us copy ko function call me pass kar deta hai taki agar kuch changes ho bhi to copy me ho na ki original array/object me