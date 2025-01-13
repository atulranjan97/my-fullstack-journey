// 3. `Create an object` with nested objects. Write a function that performs `shallow copy` of the object. Modify a property in the nested object of the copy and observe its effect on the original object.

// function shallowCopy(original) {
//     let copy = {};

//     let keysArr = Object.keys(original);
//     keysArr.forEach(key => {
//         copy[key] = original[key];
//     });

//     return copy;
// }

function shallowCopy(original) {
    return {...original};
}

const originalObject = {
    name: "Alice",
    age: 25,
    address: {
        city: "Wonderland",
        zip: "12345"
    },
    hobbies: ["reading", "painting"]
};

let copyObject = shallowCopy(originalObject);
// console.log(copyObject);

copyObject.name = "Atul";
copyObject.address.city = "New Delhi";
copyObject.hobbies[1] = "gaming";
console.log(copyObject);
console.log(originalObject);