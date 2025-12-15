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

console.log(student1);      
console.log(student2);      
console.log(student3);      

student1.printName();       
// student2.printName();       // TypeError: student2.printName is not a function
student3.printName();       





// ------------------------------------------------------------------------------------------------

// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: 2013,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: 2016,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book2.getSummary());

console.log(Object.values(book2));  // gives an array of values inside an object
console.log(Object.keys(book2));

// Constructor(ES5)
function Car() {
    console.log('Book Instantiate..');
}

// Instantiate an Object
const Audi = new Car();
// when you instantiate an object from the constructor whatever is written in the function will execute




function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// Instantiate an Object (Now we can create as many book object as we want with this constructor)
const Book5 = new Book('Book Five', 'John Doe', 2013);
const Book6 = new Book('Book Six', 'Jane Doe', 2016);

console.log(Book5);
console.log(Book5.title);
console.log(Book6.getSummary());

