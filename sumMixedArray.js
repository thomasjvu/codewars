// (8 kyu) Sum Mixed Array
/* Instructions
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

    Return your answer as a number.
*/

// Solution
function sumMix(x) {
   return x.map(element => Number(element)).reduce((acc, curr) => acc + curr,0)
}

// Refactored
const sumMix = x => x.reduce((acc, curr) => +curr + prev, 0)

// Explanation
// Use the .reduce() method to add all elements in an array together. 
// Use + unary operator to make each current value a number
// Use 0 to start the reduction at 0 and make sure that the starting value is a number
