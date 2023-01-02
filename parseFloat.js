// (8 kyu) Parse Float
/* Instructions
 * Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

// Solution
function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s)
}

// Explanation
// Use a ternary and check if the value of checking if parseFloat(s) is Not a Number is truthy or falsy
// If it is not a number (truthy in this instance), return null.
// Else if it is a number (falsy in this instance), return the value of s using the parseFloat(s) method.
