// Creating a Deep Copy using custom Recursive function (Manually creating a deep copy):

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      copy[key] = deepClone(obj[key]);
    }
  
    return copy;
}
  
  
  
const original = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
};
  
// Deep copy
const Copy = deepCopy(original);

// Modifying the inner object in the copy
deepCopy.address.city = "Los Angeles";


console.log(original.address.city); // Output: "New York" (unaffected)