// 1.
let num = 0;

if (num > 0) {
    console.log(`Positive number`);
} else if (num < 0) {
    console.log(`Negative number`);
} else {
    console.log(`Zero`);
}

// 2.
let age1 = 70;
let isWeekend = false;

if (age1 < 13) {
    console.log(`Ticket is free`);
} else if (age1 >= 13 && age1 <=60) {
    if (isWeekend) {
        console.log('Ticket price is Rs. 500/-');
    } else {
        console.log('Ticket price is Rs. 300/-');
    }
} else {
    console.log('Ticket price is Rs. 250/-');
}

// 3.
let marks = 55;

if (marks >= 90) {
    console.log('A Grade');
} else if (marks >= 80 && marks <= 89) {
    console.log('B Grade');
} else if (marks >= 70 && marks <= 79) {
    console.log('C Grade');
} else if (marks >= 60 && marks <= 69) {
    console.log('D Grade');
} else {
    console.log('F Grade');
}

// 4.
let age2 = 27;
let status1 = (age2 >= 18) ? 'Adult' : 'Minor';
console.log(`Status: ${status1}`);


// 5.
let day = 'Sunday';
 
switch (day) {
    case 'Monday':
        console.log('Happy Monday!');
        break;
    
    case 'Tuesday':
        console.log('Terrific Tuesday!');
        break;

    case 'Wednesday':
        console.log('Wonderful Wednesday!');
        break;

    case 'Thursday':
        console.log('Thriving Thursday!');
        break;

    case 'Friday':
        console.log('Fun Friday!');
        break;

    case 'Saturday':
        console.log('Super Saturday!');
        break;

    case 'Sunday':
        console.log('Serene Sunday!');
        break;
}

// 6.
let age3;
let income;
(age3 < 13 || age3 > 65) && income >= 50000

// 7.
let userInput = 0;

let output = userInput || 'No input provided';
console.log(output);