// Write a recursive function to count the number of times a specific character appears in a string.

// function countOccurrencesRecursively(str, char) {
//     let stringArr = str.split('');
    
//     let charCode = char.charCodeAt(0);      // convert character(at specific index) to it's corresponding ASCII code
//     if (charCode >= 65 && charCode <= 90) {     // isUppercase
//         charCode += 32;
//     } else {            // isLowercase
//         charCode -= 32;
//     }
    
//     let invertedCaseChar = String.fromCharCode(charCode);

    
    
//     let count = 0;
//     stringArr.forEach(element => {
//         if (element === char || element === invertedCaseChar) {
//             count++;
//         }
        
//     });
    
//     return count;
// }

function countOccurrencesRecursively(str, ch) {
    let strArray = str.split('');       // convert string to array of characters

    // let count = 0;
    function countOccurrences(strArray, ch) {
        if (strArray.length === 0) {
            return 0;
        }

        if (strArray.shift() === ch) {
            return countOccurrences(strArray, ch) + 1;
        }

        return countOccurrences(strArray, ch);
    }

    return countOccurrences(strArray, ch);

}
// Test Cases

console.log(countOccurrencesRecursively('Atul Ranjan', 'a'));  // Expected: 3

// 1. Basic Case
// Input string has multiple occurrences of the target character.
console.log(countOccurrencesRecursively("hello world", "o")); // Expected: 2

// 2. Case Sensitivity
// Test with case-sensitive characters.
console.log(countOccurrencesRecursively("Hello World", "h")); // Expected: 0 (case-sensitive)
console.log(countOccurrencesRecursively("Hello World", "H")); // Expected: 1

// 3. Character Not in String
// Test when the character is not found.
console.log(countOccurrencesRecursively("abcdef", "z")); // Expected: 0

// 4. Empty String
// Test with an empty input string.
console.log(countOccurrencesRecursively("", "a")); // Expected: 0

// 5. Empty Target Character
// Test with an empty character (invalid input case).
console.log(countOccurrencesRecursively("test", "")); // Expected: 0 or Error (based on how you handle it)

// 6. String with Repeated Characters
// String contains repeated sequences of the target character.
console.log(countOccurrencesRecursively("aaaabbbbcccc", "a")); // Expected: 4
console.log(countOccurrencesRecursively("aaaabbbbcccc", "b")); // Expected: 4
console.log(countOccurrencesRecursively("aaaabbbbcccc", "c")); // Expected: 4

// 7. Special Characters
// Input string contains special characters.
console.log(countOccurrencesRecursively("hello@world!", "@")); // Expected: 1
console.log(countOccurrencesRecursively("a.b.c.d.e", ".")); // Expected: 4


// 8. Numbers in the String
// Test when the string includes numbers.
console.log(countOccurrencesRecursively("123123123", "1")); // Expected: 3


// 9. Unicode Characters
// Test with emojis or non-Latin characters.
// console.log(countOccurrencesRecursively("😊😊😊😂😂", "😊")); // Expected: 3
// console.log(countOccurrencesRecursively("你好你好", "你")); // Expected: 2

// 10. Whitespace and Empty Spaces
// Test with spaces and other whitespace characters.
console.log(countOccurrencesRecursively("hello world", " ")); // Expected: 1
console.log(countOccurrencesRecursively("\t\n\t\n", "\n")); // Expected: 2

// 11. Multiple Occurrences in Mixed Case
// Test with a mix of case sensitivity.
console.log(countOccurrencesRecursively("AbBaAbBa", "A")); // Expected: 2
console.log(countOccurrencesRecursively("AbBaAbBa", "a")); // Expected: 2


// Edge Cases
// 1. Target Character Appears at the Beginning and End:
console.log(countOccurrencesRecursively("aba", "a")); // Expected: 2


// 2. Target Character is the Entire String:
console.log(countOccurrencesRecursively("aaaa", "a")); // Expected: 4


// 3. Non-String Inputs (If Function Allows It):
// console.log(countOccurrencesRecursively(12345, "1")); // Expected: Error or 1 (if string conversion is done)

/*

// Extra
// If your function is case-insensitive (depending on requirements), add cases for verifying this behavior:
countOccurrencesRecursively("Hello World", "h", true); // Expected: 1 (case-insensitive mode)

*/

// (Some important function definition)-------------------------------------------------------------------------------------------------------------------
function isAlphabet(char) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        return true;
    }
    
    return false;
}

function isUppercase(char) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return true;
    }
    
    return false;
}

function isLowercase(char) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
        return true
    }
    
    return false;
}

function changeCase(char) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {     // isUppercase
        charCode += 32;
    } else {            // isLowercase
        charCode -= 32;
    }
    
    return String.fromCharCode(charCode);
}