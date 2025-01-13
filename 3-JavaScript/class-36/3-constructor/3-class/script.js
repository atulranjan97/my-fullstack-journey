// In ES6, the class keyword was introduced as syntactic sugar over constructor functions to define class more succinctly(clear and short)
// Classes in JS are template for creating objects. They incapsulated data with code to work on that data.

// function Student(name, age, course, roll) {
//     this.name = name;
//     this.age = age;
//     this.course = course;
//     this.roll = roll;

//     this.printName = function() {
//         console.log(this.name);
//     }
// }

// is same as

// class Student {     // syntactic sugar for normal constructor function 
//     // constructor method
//     constructor(name, age, course, roll) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//         this.roll = roll;
    
//         // method to print student name
//         this.printName = function() {
//             console.log(this.name);
//         }   
//     }
// };

// is same as
class Student {     // Class ES6 convention
    // constructor method
    constructor(name, age, course, roll) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.roll = roll;
    }

    // Method
    printName() {
        console.log(this.name);
    }   
};

// Create an instance of class
let student1 = new Student('Hwoarang', 25, 'Python', 8);
console.log(student1);      // Output: Student { name: 'Hwoarang', age: 25, course: 'Python', roll: 8 }
student1.printName();       // Output: Hwoarang

console.log(student1 instanceof Student);   // Output: true