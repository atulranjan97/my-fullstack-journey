/* A deep copy creates a completely independent copy of the original object, including all nested objects or arrays. Modifications to the copied object do not affect the original object.

Creating a Deep Copy using JSON Serialization:
1. JSON.parse(JSON.stringify()) (Basic Deep Copy)
    - Converts the object to a JSON string and parses it back to an object.
    - Limitations: Does not work with functions, `undefined`, or circular references.

    const deepCopy = JSON.parse(JSON.stringify(original));

*/

const original = {
    name: "Atul",
    address: {
      city: "New York",
      zip: "10001"
    }
  };
  
  // Deep copy
  const deepCopy = JSON.parse(JSON.stringify(original));
  
  // Modifying the inner object in the copy
  deepCopy.address.city = "Los Angeles";
  
  console.log(original.address.city); // Output: "New York" (unaffected)
  

// In this example:
// The nested address object is fully copied, so changes to deepCopy do not affect original.












// JSON wala tareeka equals me bahut acha nahi tha but ye copy karne ke liye bahut acha tareeka hai kyunki agar ordering differt aa jaye to bhi matter nahi karega
// jab hum isko string me convert karte hai and vapis object me convert karte hai toh jo ordering hai humare keys ki vo guaranted nahi hota hai jiski vajah se comparison nahi ho pata hai but agar hum copy create kar rahe hai to humare object ki copy create ho jayegi aur is process me agar ordering different ho jati hai toh bhi usse koi farak nahi padega. 
// `copy` object ki property ki ordering different bhi ho sakti hai but it doesn't matter as long as sari key-value copy hui hai