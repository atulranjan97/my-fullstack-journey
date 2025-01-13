const obj = {
    name: 'Atul',
    greet: function () {
        console.log(this);
        // console.log(`Hello ${this.name}`);
        
        console.log(obj);
        // console.log(`Hello ${obj.name}`);   // wrong 
        // Can't use obj directly here because jab hum obj ko define kar rahe hai tabtak to ye object memory me bana nahi hai. 

        console.log(this === obj);
    }
};

obj.greet();    // Output: Hello Atul