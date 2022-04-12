// (7 kyu) No Oddities Here
/* Instructions
 * Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

// Solution
// function noOdds(values) {
//     return values.filter(element => element % 2 === 0)
// }

// ES6
const noOdds = values => values.filter(element => element % 2 === 0)

// Explanation
// Use the .filter() method to return only even elements in the array by adding a callback function using modulus to find elements that when divided by 2 have a remainder of 0
// Returning this will give us all the even values in the order that they are given
