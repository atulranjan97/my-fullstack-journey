const greatGrandParent = document.querySelector('.great-grand-parent');
const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Event Propagation has two main phases:
// 1. Capturing Phase (event goes from the topmost element down to the target)
// 2. Bubbling Phase (event goes from the target back up to the top)

// Capturing phase: Add a third argument `true` to the listener for capturing.

// Listener on the Great grandparent during the capturing phase
greatGrandParent.addEventListener(
    'click', 
    () => {
        console.log('GreatGrandparent clicked! (Capturing)');
    }, 
    true    // This makes it run during the capturing phase
);


// Listener on the grand parent element
grandParent.addEventListener(
    'click', 
    () => {
        console.log('Grandparent clicked! (Capturing)');
    }, 
    true
)    


// Listener on the parent during the capturing phase
parent.addEventListener(
    'click', 
    () => {
        console.log('Parent clicked! (Capturing)');
    }, 
    true
);    


// Listener on the child element (target element)
child.addEventListener(
    'click', 
    (event) => {
        console.log('Child clicked!');
        event.stopPropagation();    // stop the event from bubbling up
    }
);

// The `event` starts from the outermost element and captures down to the target element

// Example Output (when clicking the button):
// 1. "greatGrandparent clicked! (Capturing)" (Capturing phase)
// 1. "Grandparent clicked! (Capturing)" (Capturing phase)
// 2. "Parent clicked! (Capturing)" (Capturing phase)
// 3. "Child clicked!" (Target phase)

// Use Case Reminder:
// - Capturing is less commonly used than bubbling.
// - It’s useful when you need to handle events before they reach the target element.