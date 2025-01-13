
console.log(this);  // Output: {}

const obj = {
    name: 'Atul',
    // Arrow function do not have their own `this`. They inherit `this` from the enclosing object. 
    greet: () => {
        console.log(this);      // Output: {}
        console.log(`Hello ${this.name}`);   // Output: undefined (inherited from global context)
    }

    // greet: function() {
    //     console.log(this);      // Output: { name: 'Atul', greet: [Function: greet] }
    //     console.log(`Hello ${this.name}`);  // Output: Hello Atul
    // }
};

obj.greet();
