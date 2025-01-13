// Inheritance in JS use ES6 classes

class Cat {
    constructor(name) {
        this.name = name;
        this.legs = 4;
    }

    speak() {
        console.log(`${this.name} mews.`)
    }

    move() {
        console.log(`The Cat is moving on ${this.legs} legs.`);
    }
}

let tom = new Cat('Tom');
tom.speak();    // Output: Tom mews.
tom.move();     // Output: The Cat is moving on 4 legs.

class Lion extends Cat {
    // jab bhi derived(child) class me constructor lagayenge to humein parent class ka constructor call karna padega, and hum parent class ka constructor `super` keyword ki help se call karte hai, kyunki JS me parent class ko super class bhi bola jata hai.
    constructor(name, color) {
        super(name);        // call the parent class constructor
        this.color = color;
    }
    // the `super` keyword is used to call the constructor of the parent class and to access its method.

    // method overriding
    speak() {
        console.log(`${this.name} roars.`);
    }
    // method speak inherited from class cat will get overridden by this method.

    eat() {
        console.log(`${this.name} eats meat.`)
    }
}

let simba = new Lion('Simba');

simba.speak();  // Output: Simba roars.
simba.move();   // Output: The Cat is moving on 4 legs. (inherited method from parent)
simba.eat();    // Output: Simba eats meat.




