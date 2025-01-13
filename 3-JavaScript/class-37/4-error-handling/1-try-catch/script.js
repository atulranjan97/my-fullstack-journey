let parseStringtoJSON = (jsonString) => {
    try {   // try block contains code that might through an error
        return JSON.parse(jsonString);
    } catch (error) {       // catch block will be executed only if error occurs in try block, else it will be skipped. 
        console.log('Error occured');
        console.log(error);
        console.log(error.message);

        // return empty object if error occurs
        return {};
    }
}


let jsonString = "{'A':1}";         // invalid json string "{'A':1}" 
// valid json string: '{"A":1}'     (all properties of a valid json string must be enclosed in double quotes only)

// let jsonString = '{"A":1}';      // valid json string

let newObj = parseStringtoJSON(jsonString);
console.log(newObj);


// `catch block` me rakha code sirf tab execute hoga jab `try block` ke ander koi error originate ho rahi hai
// agar error originate hui toh catch block me humein error ka object as argument milta hai jisme error se related saari details hoti hai jisko agar hum chahe to use kar sakte hai

// jis bhi code me possible error ho sakta hai usko try ke ander likhenege, catch sirf tab execute hoga jab error hui ho