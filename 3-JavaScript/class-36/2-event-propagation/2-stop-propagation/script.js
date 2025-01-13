const parent = document.querySelector('.outer');
const child = document.querySelector('.inner');

// Listener on the parent element
parent.addEventListener('click', () => {
    console.log('Parent Clicked');
})

// Listener on the child element
child.addEventListener('click', (event) => {
    console.log('Child clicked');
    event.stopPropagation();    // stop the event from bubbling up
})
// clicking the button will log only: Child clicked 


// hum `event` naam ka parameter declare kar rahe hai apne handler function me , jab bhi child element par `click` event occur hoga then JS runtime humare is handler function ko call karega, call karte time vo ek object pass karega jisme is event se related sari details hongi jise hum apne handler function me use kar sakte hai for various tasks(such as stopping event Propagation and many more.. ) 