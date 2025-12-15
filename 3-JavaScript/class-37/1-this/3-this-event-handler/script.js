let container = document.getElementById('container');

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');



// container.addEventListener('click', function() {
//     console.log(this); 
//     console.log(this.id); 
// });
/* Output:  <div id="container">
                <button id="btn1">Button 1</button>
                <button id="btn2">Button 2</button>
                <button id="btn3">Button 3</button>
            </div>

            container
*/

button1.addEventListener('click', function() {
    console.log(this); 
    console.log(this.id); 
});
/* Output:  <button id="btn1">Button 1</button>

            btn1

            <div id="container">                     // due to event propagation
                <button id="btn1">Button 1</button>
                <button id="btn2">Button 2</button>
                <button id="btn3">Button 3</button>
            </div>

            container
*/

// In an event handler, `this` refers to the element that received the event.

// --------------------------------------------------------------------------------------------------------------------


console.log(this);          // window object (in browser environment)

function handleClick() {
    console.log(this.id); 
    this.style.backgroundColor = 'red';
}
// The value of `this` depends on how a function is called, not where it is defined.

container.addEventListener('click', handleClick);     // Output: container
// here, `this` inside function `handleClick` would referring to `container` object as it is being called from `addEventListener` method of `container` object 

button2.addEventListener('click', handleClick);       // Output: btn2 container
// `this` inside function `handleClick` would start referring to `button2` object as it is being called from `addEventListener` method of `button2` object 

button3.addEventListener('click', handleClick);       // Output: btn3 container

