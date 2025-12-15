function generateRandomNumber() {
    return Math.floor(Math.random() * 100) +1;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

// the system we are using here to export is commonjs, it's like the native node.js module system
// default export using commonjs syntax
// module.exports = generateRandomNumber; 

// importing multiple (commonjs)
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit,
}