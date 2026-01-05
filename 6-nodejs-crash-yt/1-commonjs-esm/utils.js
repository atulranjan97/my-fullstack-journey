function generateRandomNumber() {
    return Math.floor(Math.random() * 100) +1;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

// This file is a commonjs module and to export something from commonjs module we have to use module.exports
// In node.js every file is a commonjs module by default
// default export using commonjs syntax
// module.exports = generateRandomNumber; 

// importing multiple items(commonjs)
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit,
}