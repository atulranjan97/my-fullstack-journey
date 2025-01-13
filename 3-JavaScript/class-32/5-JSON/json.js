// JSON (JavaScript Object Notation) is a lightweight string format for storing and transporting data, often used in APIs.
// JSON is widely used for data exchange and storage.
// `JSON.stringify()` converts objects to strings.
// `JSON.parse()` converts strings back to objects.

// Use Cases:
// 1. To send data between a server and a client.
// 2. To store structured data (e.g., in localStorage or files).
// 3. To convert objects/arrays to strings (serialization).

let user = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    email: 'atul.ranjan098@gmail.com',
    hobbies: ['gaming', 'music'],
};

console.log(user);      
/* Output: 
            {
                firstName: 'Atul',
                lastName: 'Ranjan',
                age: 28,
                email: 'atul.ranjan098@gmail.com',
                hobbies: [ 'gaming', 'music' ]
            }
*/

// Convert Object to JSON String:
let jsonStr = JSON.stringify(user);

console.log(jsonStr);      // Output: {"firstName":"Atul","lastName":"Ranjan","age":28,"email":"atul.ranjan098@gmail.com","hobbies":["gaming","music"]}    
console.log(typeof jsonStr);       // Output: string

// this JSON string can now be sent to network or can be saved to database kyunki ab ye data string format hai jisko koi bhi samajh sakta hai (be it backend written in python or any language)



// Suppose we received a data(a JSON string) from user(client side), to convert it back to JS object we have to use JSON.parse() method 
// Convert JSON String back to Object:
let userStr = '{"Name":"Jin","age":28,"city":"New Delhi","email":"atul.ranjan098@gmail.com","skills":["C","C++","JavaScript"]}';
let newUser = JSON.parse(userStr);

console.log(newUser);
/* Output: 
            {
                Name: 'Jin',
                age: 28,
                city: 'New Delhi',
                email: 'atul.ranjan098@gmail.com',
                skills: [ 'C', 'C++', 'JavaScript' ]
            } 
*/
console.log(newUser["email"]);      // Output: atul.ranjan098@gmail.com

// we use JSON to send something to network or to save/retrive data


// JSON.stringify() does not convert an object's methods, they will be ignored when you convert the object to a JSON string.
const obj = {
    name: 'Paul',
    greet: function() { return 'Hello!'; }
  };
  
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // Output: {"name":"Paul"}
  