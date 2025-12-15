function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);   // call parent constructor with child's 'this'

    this.month = month;
}
/*
    Book.call(this, title, author, year) means:
        Take the Book constructor and run it, but pretend that `this` refers to the Magazine instance we’re building.
        It gives the Magazine instance all the property that Book normally creates.
*/



// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);


// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());



