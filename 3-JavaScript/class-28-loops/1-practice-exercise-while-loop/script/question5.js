// 5. Create a program to find the least common multiple(LCM) of two numbers.

function LCM(num1, num2) {
    let multiple = num1 > num2 ? num1 : num2;   // Start with the larger of the two numbers
    const smallNum = num1 < num2 ? num1 : num2;
    const increment = multiple;     // Increment by the larger number.

    while (true) {
        if (multiple % smallNum === 0) {
            return multiple;
        }

        multiple += increment;  // Increment by the larger number.
    }
}

console.log(LCM(4,6));
console.log(LCM(7,5));
console.log(LCM(10,10));
console.log(LCM(1,13));
console.log(LCM(3,9));
console.log(LCM(48,180));
console.log(LCM(123,456));
console.log(LCM(1000,2500));