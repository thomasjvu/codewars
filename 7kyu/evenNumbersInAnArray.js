// (7 kyu) Even numbers in an array
/* Instructions
 * Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/

// Solution
function evenNumbers(array, number) {
    array = array.filter(element => element % 2 === 0)
    return array.splice(-number)
}

// Explanation
// Use the filter method to receive only the even numbers in an array using modulus
// Use the splice(-number) method to grab and return the last number(s) of telements in the array


