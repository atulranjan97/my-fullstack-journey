// A shallow copy means creating a new object that is a copy of the original object but only at the first level. For nested objects or arrays, the inner objects or arrays are still referenced rather than copied.


const original = {
    name: "Atul",
    address: {
      city: "New York",
      zip: "110059"
    }
  };
  
// Shallow copy
// const shallowCopy = { ...original };   // spread operator is used here which is covered in later classes
const shallowCopy = Object.assign({}, original);


// Modifying the inner object in the copy
shallowCopy.address.city = "Los Angeles";

console.log(original.address.city); // Output: "Los Angeles" (affected!)


/*

In this example:

The address object is shared between original and shallowCopy.
Changes to nested properties affect both because only the top-level object is copied.

*/
