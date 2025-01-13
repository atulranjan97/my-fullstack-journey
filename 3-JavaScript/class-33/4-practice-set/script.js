// 1. Display good morning, afternoon and night based on the current hour
function greet(currentHour) {
    let greetStr = 'Hello';
    if (currentHour >= 6 && currentHour < 12) {
        greetStr = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 16) {
        greetStr = 'Good Afternoon';
    } else if (currentHour >= 20 || currentHour < 6) {
        greetStr = 'Good Night';
    }
    
    return greetStr;
}

let currentHour = new Date().getHours();
let currentMinute = new Date().getMinutes();
let currentTime = currentHour + (currentMinute / 60);


// 2. Add the name to the output too
// let userName = prompt('Enter your name here');
let userName = 'Atul'
document.querySelector('.greet').innerText = `${greet(currentTime)} ${userName}`;

// 3. Create a button which shows the number of time it has been pressed. 
    // - Also, it has different colors for when it has been pressed odd or even times.
    // - The click count should also survive browser refresh.

let clickMeButton = document.querySelector('.clickMe');

let counterObj = {
    counter: 0,
    colorChanger: function() {
        if (this.counter % 2 === 0) {
            clickMeButton.style.backgroundColor = 'green';  
        } else {
            clickMeButton.style.backgroundColor = 'red';
        }   
    },
    updateCounter: function() {
        let counterStr = localStorage.getItem('savedCounter');      // counterStr = '{"counter":24}'
        if (counterStr) {
            let counterVal = JSON.parse(counterStr);                // {counter: 24} (an object)
            this.counter = counterVal.counter;
            clickMeButton.innerText = `${counterObj.counter}`;
        } 
        this.colorChanger();
    },
    increment: function () {
        this.counter++;
        clickMeButton.innerText = `${counterObj.counter}`;
        this.colorChanger();
        this.saveCounter();
    },
    saveCounter: function() {
        localStorage.setItem('savedCounter',JSON.stringify(counterObj));
    }
}

counterObj.updateCounter();

function clickMe() {
    counterObj.increment();
}

