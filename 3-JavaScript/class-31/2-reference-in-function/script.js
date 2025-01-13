function swap(a, b) {
    console.log(`In function: Before Swap a = ${a}, b= ${b}`);      // In function: Before Swap a = 10, b= 20
    let temp = a;
    a = b;
    b = temp;
    console.log(`In function: After Swap a = ${a}, b= ${b}`);       // In function: After Swap a = 20, b= 10
}


let x = 10;
let y = 20;

console.log(`Before Swap x= ${x}, y=${y}`);     // Before Swap x= 10, y=20
swap(x, y);
console.log(`Before Swap x= ${x}, y=${y}`);     // Before Swap x= 10, y=20



function swapObjects(p, q) {
    console.log(`In function: Before Swap p = ${p.myValue}, q = ${q.myValue}`);      // In function: Before Swap p = 10, q = 20
    let temp = p.myValue;
    p.myValue = q.myValue;
    q.myValue = temp;
    console.log(`In function: After Swap p = ${p.myValue}, q = ${q.myValue}`);       // In function: After Swap p = 20, q = 10
}

let obj1 = {myValue: 10};
let obj2 = {myValue: 20};

console.log(`Before swapping objects, obj1 = ${obj1.myValue}, obj2 = ${obj2.myValue}`);      // Before swapping objects, obj1 = 10, obj2 = 20
swapObjects(obj1, obj2);
console.log(`After swapping objects, obj1 = ${obj1.myValue}, obj2 = ${obj2.myValue}`);      // After swapping objects, obj1 = 20, obj2 = 10