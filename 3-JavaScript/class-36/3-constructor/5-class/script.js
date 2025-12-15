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



// --------------------------------------------------------------------------------------------------------------
class Book {
    constructor() {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
     
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
}

// Instantiate Object
const book1 = new Book('Book2', 'John Doe', '2013');

console.log(book1);
book1.revise('2018');
console.log(book1);

