// Destructuring: Extract properties from objects easily
// We can extract more than one property at once

// Destructuring Object properties
    let student = {
        firstName: 'Atul',
        lastName: 'Ranjan',
        age: 28,
        address: {
            houseNo: 70,
            road: 'Hastsal Road',
            city: 'New Delhi',
            state: 'Delhi',
        },
        subjects: ['Physics', 'Chemisty', 'Maths'],
        feesPaid: true,
    };


    function printName(obj) {
        // Destructuring
        // let firstName = obj.firstName;
        // let lastName = obj.lastName;

        // is same as
        let {firstName, lastName} = student;
        // We can extract more than one property at once
        
        console.log('Name:', firstName, lastName)
    }

    printName(student);


// Destructuring Array items
    let even = [2, 4, 6, 8, 10];

    // Destructuring 
    // let first = even[0];
    // let second = even[1];

    // is same as
    let [first, second] = even;
    console.log(first, second)      // Output: 2 4



    
// Shorthand Property (not destructuring)--------------------------------------------------------------------------------------------

let price = 949;
let product = {
    company: 'G-Corporation',
    itemName: 'Electo t-shirt',
    price: price,
};
// is same as
let product1 = {
    company: 'G-Corporation',
    itemName: 'Electo t-shirt',
    // price: price,
    price,
    // shorthand property: {price: price} simplifies to just price
};





// Shorthand Method (not destructuring)--------------------------------------------------------------------------------------------

let price2 = 998.75;
let product3 = {
    company: 'G-Corporation',
    itemName: 'Electo t-shirt',
    price2,
    displayPrice: function () {
        return `Rs. ${this.price2.toFixed(2)}`;
    },
};
// is same as
let product4 = {
    company: 'G-Corporation',
    itemName: 'Electo t-shirt',
    price2,         // shorthand property: {price: price} simplifies to just price
    displayPrice() {
        return `Rs. ${this.price2.toFixed(2)}`;
    },
    // Shorthand Method: Define methods directly inside the object without the function keyword
};