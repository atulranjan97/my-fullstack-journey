// refer notes
/* syntax

    function() {
        // function body
    }

*/

// Example as callback
setTimeout(function() {
    console.log('This is anonymous');
}, 1000);
// They are often used as argument to other functions
/*  Advantage of using them as argument to other functions:
        
        Useful for creating function scopes and avoiding global variables :

        1. What is a Global Variable?
            - A global variable is one that is declared in the global scope and is accessible from anywhere in the code. For example:

            The problem with global variables is that they:
                - Increase the risk of naming conflicts because many parts of the code can access and modify them.
                - Make the program harder to debug and maintain, as changes to the variable may come from any part of the program.    

        2. How Functions Create Scope
            - Functions in JavaScript create a local scope, meaning variables declared inside a function are not accessible outside of it. This helps to encapsulate logic and avoid polluting the global scope.

            function example() {
                var localVar = "I’m local!";
                console.log(localVar); // Accessible here
            }

            example();
            console.log(localVar); // Error: localVar is not defined

            Here, `localVar` exists only inside the `example` function and cannot affect or be affected by code outside of it.

        3. Anonymous Functions and Scope
            - Anonymous functions, often passed as arguments or used immediately, are particularly useful for creating isolated scopes and avoiding the creation of global variables. This is because variables declared inside the function remain within its local scope.     
            
            Example: Anonymous Function in `setTimeout`
                setTimeout(function() {
                    var localMessage = "This is local!";
                    console.log(localMessage); // Works here
                }, 1000);

                console.log(localMessage); // Error: localMessage is not defined

            Here, `localMessage` is encapsulated inside the anonymous function. It doesn’t leak into the global scope, ensuring it doesn’t interfere with other variables.
*/

// By not assigning the function to a variable, you prevent unnecessary variables from being added to the surrounding scope, which reduces the risk of variable name conflicts or clutter:
// When you define a function and assign it to a variable, that variable remains in the current scope (global or local) until the program ends or the scope is destroyed. This can lead to unnecessary variables hanging around, taking up memory or potentially interfering with other parts of the code.


// 3. Useful for creating function scopes and avoiding global variables : agar hum function ko variable me assign karenge to koi na koi ise variable ke through call kar payega, but agar hum chahe ki koi aur isko call kar hi na paye because ye sirf humne setTimeout ke liye hi banaya hai, toh ab isko directly setTimeout ke ander hi agar pass karenge toh setTimeout ke pass hi as a value jayega , vo hi isko use kar payega aur koi isko yaha par use nahi kar payega
