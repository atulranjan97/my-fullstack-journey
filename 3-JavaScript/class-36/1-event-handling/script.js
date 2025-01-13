let clickHandler = () => {
    console.log('Button clicked');
}

let clickHandler2 = () => {
    for(let i = 1; i < 5; i++ ){
        console.log(i);
    }
}

clickHandler();

let button2 = document.getElementById('myButton');
// button2.onclick = clickHandler;  // here we pass clickHandler(a function) as callback


// Method 1: Using Event Handler
// button2.onclick = clickHandler;     // Assigns the clickHandler function to the button’s onclick event.
// button2.onclick = clickHandler2;    // Overwrites the previous assignment. Now, only `clickHandler2` is attached to the `onclick` event.
// When the button is clicked, only `clickHandler2` is executed, logging the numbers 1, 2, 3, and 4 to the console.

// Disadvantage: The `onclick` property allows only one event handler at a time. To attach multiple event handlers, you need to use the `addEventListener` method instead.



// Method 2: Using Event listener
// attach event listener
button2.addEventListener('click', clickHandler);
button2.addEventListener('click', clickHandler2);


// remove event listener 
// button2.removeEventListener('click', clickHandler2);


/* event driven architecture?
What is Event-Driven Architecture?
- Events: Actions or occurrences recognized by the program (e.g., a user clicks a button, data is received from a server, or a timer fires).
- Emitters: Objects or components that generate (emit) events when certain actions occur.
- Listeners/Handlers: Functions that respond to specific events by executing some code.
In an event-driven architecture, the system reacts to events as they occur, rather than following a pre-defined sequence of operations.

Analogy:
Think of event-driven architecture like this:
Imagine you’re in a restaurant.

1. You (the customer): Ask for food (this is an event).
2. Waiter: Listens to your request and tells the chef (event listener).
3. Chef: Cooks your food (response to the event).
4. Waiter: Brings the food back to you (result of the event).
In event-driven architecture, the system waits for something to happen (like your request) and then reacts to it.

*/


// When you use addEventListener, the same function attached to the same event is not duplicated. If you call addEventListener multiple times with the same function for the same event, it will only register the listener once.
// button2.addEventListener('click', clickHandler);
// button2.addEventListener('click', clickHandler);
// button2.addEventListener('click', clickHandler2);
// internally, `click` event ke liye JS ne handlers ki ek list banake rakhi hui hai ki jab bhi `click` event call hoga ye puri list hai jisme mujhe handlers ko call karna hai, agar hum koi bhi duplicate handler(same reference) us list me add karne ki koshish karenge toh vo us duplicate ko add nahi karne dega , vo ye bolega ki aap ye wala jo handler register karna chah rahe hai ye to is event ke liye already yaha par register hai.