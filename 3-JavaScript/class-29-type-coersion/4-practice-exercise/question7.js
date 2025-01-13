// Write a recursive function to check if a given string is a palindrome (reads the same forward and backward).

function isPanlindrome(str) {
    if (str.length === 0) {
        return 'Invalid input, empty string not allowed.';
    }
    
    let startIndex = 0;
    let endIndex = str.length - 1;

    return (function palindrome(str, startIndex, endIndex) {
        // base case
        if (startIndex >= endIndex) {
            return true;
        }
        
        // recursive case
        return (str[startIndex] === str[endIndex]) && palindrome(str, startIndex + 1, endIndex - 1);
    })(str, startIndex, endIndex);

}

console.log(isPanlindrome('racecar'));
console.log(isPanlindrome('hello'));
console.log(isPanlindrome('aa'));
console.log(isPanlindrome('a'));
console.log(isPanlindrome(''));

// Strings in JavaScript are immutable, so while you can read individual characters, you cannot modify them directly.