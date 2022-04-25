// (8 kyu) Formatting decimal places #0
/* Instructions
 * Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34

*/

// Solution
function twoDecimalPlaces(n) {
    return +n.toFixed(2)
}

// Refactored
const twoDecimalPlaces = n => +n.toFixed(2)

// Explanation
// the .toFixed(2) method will return a string of the number to 2 decimal places, so use the + unary operator to turn it into a number
