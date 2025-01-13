const parent = document.querySelector('.outer');
const child = document.querySelector('.inner');

// 1. Event propagation determines the order in which event handlers are executed when an event occurs on an element nested within other elements.

// Listener on the parent element
parent.addEventListener('click', () => {
    console.log('Parent Clicked');
})

// Listener on the child element
inner.addEventListener('click', () => {
    console.log('Child clicked');
})

// Example Output (on clicking the button):
// 1. "Child clicked!" (Child event is triggered first)
// 2. "Parent clicked! (Bubbling)" (Event bubbles up to the parent)



// 2. The event starts from the target element and bubbles up to the outer elements.
// 3. By default, events propagate in the bubbling phase. (yani ye bubbling phase ek default behaviour hota hai, hum chahe toh is behaviour ko change kar sakte hai, but agar humne aur koi alag behaviour define nahi kiya hai toh by default jo event propagation chalta hai vo bubbling phase ke ander chalta hai) 

// suppose there is one parent and multiple childs, `event` does not get propagated to siblings, it will occur to the target element and then propagates to ancestors.  