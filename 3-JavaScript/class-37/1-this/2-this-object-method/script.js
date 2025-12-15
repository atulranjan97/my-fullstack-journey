const obj = {
    name: 'Atul',
    greet: function () {
        console.log(this);  // inside a method, `this` refers to the object that calls the method.
        // console.log(`Hello ${this.name}`);
        
        // console.log(obj);
        console.log(`Hello ${obj.name}`);   // wrong 
        // Can't use obj directly here because jab hum obj ko define kar rahe hai tabtak to ye object memory me bana nahi hai. 

        console.log(this === obj);
    }
};

obj.greet();    // Output: Hello Atul


class Fighter {
    constructor(name, style, matchesWon) {
        this.name = name;
        this.style = style;
        this.matchesWon = matchesWon;
    }

    fightingStyle() {
       console.log(`Fighting style of ${this.name} is ${this.style}`) 

       console.log(`Fighting style of ${fighter1.name} is ${fighter1.style}`) 
        // That works only because you're calling it on fighter1 specifically.
        // It breaks as soon as you call the method on another instance like fighter2
    }

};

const fighter1 = new Fighter('Hwoarang', 'Taekwondo', 8);
fighter1.fightingStyle();

// const fighter2 = new Fighter('Jin', 'Karate', 10);
// fighter2.fightingStyle();
