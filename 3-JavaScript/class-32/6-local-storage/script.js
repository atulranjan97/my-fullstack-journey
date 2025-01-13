// visit notion link for detailed info: https://www.notion.so/Class-32-Local-Storage-160052c4d3f9801f84e5e0e42ab52e1f?pvs=4

/*
Local storage is a web storage API provided by modern web browsers that allows developers to store data on the client side. This data is stored in the browser and persists even after the user closes the browser or navigates away from the webpage.

Key Features of Local Storage
    1. Storage Limit: Typically, local storage allows up to **5MB** of data per origin (domain + protocol + port).
    2. Persistent Data: The data persists even after the browser is closed or the user navigates to a different page.
    3. Synchronous API: Operations on local storage are synchronous, meaning they block other JavaScript operations until the storage task is complete.
    4. Key-Value Pair Format: Local storage stores data in the form of key-value pairs, where both keys and values are strings.


How to Use Local Storage in JavaScript  
    1. Accessing Local Storage
        Local storage is accessed via the `localStorage` object, which is part of the `window` global object.
    
    
    2. Methods of Local Storage
        Local storage provides the following methods to interact with data:
        
        - `setItem(key, value)` → Stores a key-value pair.
        - `getItem(key)` → Retrieves the value associated with the given key.
        - `removeItem(key)` → Removes the specified key-value pair.
        - `clear()` → Clears all key-value pairs from local storage.
        - `key(index)` → Retrieves the key at the given index.
*/



// execute this file in browser enviornment as this concept is browser specific only (avoid node)
console.log('Using Local Storage');


// 1. Storing Data in Local Storage
// Store a single key-value pair
localStorage.setItem('name', 'Atul');
localStorage.setItem('age', '28');
// setItem: Stores data as key-value pair

// visit Browser's inspect tool -> Application -> Storage -> Local Storage -> http://127.0.0.1:5500
// on opening local storage you can see multiple `key-value` pairs, in these you can see your key-value pair(ie, name    Atul)



let user = {
    firstName: 'Atul',
    lastName: 'Ranjan',
    age: 28,
    email: 'atul.ranjan098@gmail.com',
    hobbies: ['gaming', 'music'],
};

// localStorage.setItem('userInfo', user);      // both key and value must be a string
// String Only: Local storage can only store strings. If you try to store other data types like objects or arrays, you must convert them to strings (e.g., using JSON.stringify()).
localStorage.setItem('userInfo', JSON.stringify(user));


// 2. Retrieving Data from Local Storage
let userInfoStr = localStorage.getItem('userInfo');
console.log(userInfoStr);       
console.log(typeof userInfoStr);        // Output: string
let userInfo = JSON.parse(userInfoStr);
console.log(userInfo);


// humare application/website me agar koi chiz aisi hai jo survive karna chahti hai(browser refreshes ko survive karna chahti hai ya application band ho gayi hai aur kabhi baad me aake kholenge uske baad bhi survive karna chahti hai) taki same storage humesha humko mile toh browser environment me storage ke liye hum local storage jo hai usko use kar sakte hai

// Do not store sensitive information in local storage as anyone can view it in storage console