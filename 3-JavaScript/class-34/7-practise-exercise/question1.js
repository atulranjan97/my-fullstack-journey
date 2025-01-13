// 1. Add a function `isIdenticalProduct` to compare two product objects.

function isIdenticalProduct(obj1, obj2) {
    // check if both inputs contains reference of same objects
    if (obj1 === obj2) {
        return true;
    }

    // check if both inputs are not objects or null
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null ) {
        return false;
    }
    
    const keys1 = Object.keys(obj1);    // returns an array of keys from obj1
    const keys2 = Object.keys(obj2);    // returns an array of keys from obj2
    // check if numbers of keys in both objects are not equal
    if (keys1.length !== keys2.length) {
        return false;
    }

    // (`forEach` is not compatible here, either use `traditional loop` or `for...of loop`)
    // keys1.forEach(key => {
    //     if (!obj2.hasOwnProperty('key') || !isIdenticalProduct(obj1['key'], obj2['key'])) {
    //         return false;
    //     }
    // });
    // The `forEach` loop cannot return a value (like false) from the outer function. If you want to exit early upon finding a mismatch, you should use a regular for loop instead.
    // Use `for-each` only when you need to perform an action on each array element and don't need to break early.


    // (traditional loop)
    // for (let i = 0; i < keys1.length; i++) {
    //     if (!obj2.hasOwnProperty(keys1[i]) || !isIdenticalProduct(obj1[keys1[i]], obj2[keys1[i]])) {
    //         return false;
    //     }
    // }


    // (`for...of` loop)
    for (const key of keys1 ) {
        if (!obj2.hasOwnProperty(key) || !isIdenticalProduct(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;

}

// Test cases:
const product1 = { id: 1, name: "Laptop", price: 1000 };
const product2 = { id: 1, name: "Laptop", price: 1000 };
console.log(isIdenticalProduct(product1, product2)); // true

const product3 = { id: 2, name: "Phone", price: 500 };
console.log(isIdenticalProduct(product1, product3)); // false

const product4 = { id: 1, name: "Laptop", price: 1000, color: "Black" };
console.log(isIdenticalProduct(product1, product4)); // false

const productA = {
    id: 1,
    name: "Laptop",
    price: 1000,
    specs: {
      cpu: "Intel i7",
      ram: "16GB",
      storage: ["512GB SSD", "1TB HDD"]
    },
    tags: ["Electronics", "Portable"]
  };
  
  const productB = {
    id: 1,
    name: "Laptop",
    price: 1000,
    specs: {
      cpu: "Intel i7",
      ram: "16GB",
      storage: ["512GB SSD", "1TB HDD"]
    },
    tags: ["Electronics", "Portable"]
  };
  console.log(isIdenticalProduct(productA, productB)); // true
  
const productC = null;
console.log(isIdenticalProduct(productA, productC)); // false




