// Create student1 object 
let student1 = {
    name: 'Paul',
    age: 45,
    course: 'C++', 
    roll: 4,

    printName() {
        console.log(this.name);
    }
}

// Create student2 object 
let student2 = {
    name: 'Jin',
    age: 25,
    course: 'Java', 
    roll: 7,
}
// object literals are used to define objects, leading to code duplication and inefficiency.


// Student constructor function
function Student(name, age, course, roll) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.roll = roll;

    this.printName = function() {
        console.log(this.name);
    }
}
// By convention, constructor functions are named with an initial capital letter to distinguish them from regular functions.
// Constructor are special functions in JS used to create and initialize objects.
// They serve as blueprints for creating instances of specific types, making code organized and reusable.    


// Create student3 object using the Student constructor
let student3 = new Student('Hwoarang', 25, 'Python', 8);
// When a function is called with `new`, it becomes a constructor, `this` refers to the new object.
// Constructor automatically returns the new object unless they explicitly return a different object.

console.log(student1);      // Output: { name: 'Paul', age: 45, course: 'C++', roll: 4 }
console.log(student2);      // Output: { name: 'Jin', age: 25, course: 'Java', roll: 7 }
console.log(student3);      // Output: Student { name: 'Hwoarang', age: 25, course: 'Python', roll: 8 }

student1.printName();       // Output: Paul
student2.printName();       // error
student3.printName();       // Output: Hwoarang