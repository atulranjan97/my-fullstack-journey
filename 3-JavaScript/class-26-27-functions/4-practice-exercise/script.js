// 1.
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(isEven(14));
// console.log(isEven(7));
// console.log(isEven(0));
// console.log(isEven(-34));



// 2.
function checkLargerNumber(num1, num2) {
    return (num1 >= num2) ? num1 : num2;
}

// console.log(checkLargerNumber(12, 13));
// console.log(checkLargerNumber(7, 7));
// console.log(checkLargerNumber(34, 23));


// 3.
function celsiusToFahrenheit(degCel) {
    return (9 / 5) * degCel + 32;
}

// console.log(celsiusToFahrenheit(0));       // 32
// console.log(celsiusToFahrenheit(100));     // 212
// console.log(celsiusToFahrenheit(25));      // 77
// console.log(celsiusToFahrenheit(-40));     // -40
// console.log(celsiusToFahrenheit(-10));     // 14
// console.log(celsiusToFahrenheit(1000));    // 1832
// console.log(celsiusToFahrenheit(-1000));   // -1768
// console.log(celsiusToFahrenheit(37.5));    // 99.5
// console.log(celsiusToFahrenheit(0.5));     // 32.9

// 4.
function squareOf(num) {
    return num * num;
}

console.log(squareOf(12));
console.log(squareOf(13));
console.log(squareOf(100));