// refer class notes

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }
}

// getSummary (instead of putting getSummary inside the constructor, let's create a prototype method)
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}
// now this method is not there in the actual object but its now stored in the prototype in the object itself and the reason we want to do this because we do want the title, author and year for every book object but we are not going to want getSummary for every book so thats why we want to store it in the prototype. 

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object (Now we can create as many book object as we want with this constructor)
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

// console.log(Book5);
// console.log(Book5.title);
// console.log(Book6.getSummary());
// console.log(Book6.getAge());

console.log(book1);
console.log(book2);
book2.revise('2018');
console.log(book2);

