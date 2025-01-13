console.log('Call By Value');
let c = 10;

let d = c;
// c me rakhi value ki copy d me gayi hai naki actual value.

console.log(`c=${c}, d=${d}`);      // Output: c=10, d=10 
c = 15;
console.log(`c=${c}, d=${d}`);      // Output:c=15, d=10 



console.log('Call By Reference');
let x = {myValue: 10};
// heap memory me object ke liye memory allocate hui hai jiska reference x me stored hai, x is a kind of reference variable jiski memory stack me allocate hui hai
// x me object ka reference store hua hai naki actual object, now x started pointing to that object.

// copying an object copies reference, not the actual object
let y = x;
// x me rakhi reference ki copy y me gayi hai jisse ab y bhi us object ko point karne lagega jise abtak sirf x point kar raha tha

console.log(`x=${x.myValue}, y=${y.myValue}`);      // Output: x=10, y=10    

// changes to one reference affects all copies      
x.myValue = 15;
// x ki ek key value change karne par y ki key value automatically change ho gayi because both contains the reference of same object
console.log(`x=${x.myValue}, y=${y.myValue}`);      // Output: x=15, y=15 


// When comparing with ==, you're comparing references, not content
console.log(x == y);        // Output: true

let z = {myValue: 15};
console.log(z == y);        // Output: false
// z and y jin object ko point kar rahe hai vo dikhne me bhale same hai but different objects hai, mean both pointing to different objects   