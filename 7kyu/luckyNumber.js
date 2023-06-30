// (7 kyu) Lucky Number
/* Instructions

Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

Function will return true for lucky numbers and false for others.

*/

// Solution
function isLucky(n) {
    let sum = String(n).split('').map(e => Number(e)).reduce((a, b) => a + b, 0)

    return (sum === 0 || sum % 9 === 0)
}

// Explanation
// Turn the number into a string so that it can be split into an array, then map a new array that takes each string element and replaces it with its numeric value, finally, get the sum by reducing the array of numbers.
// Return statement will implicitly return true or false depending on if either operand is true
