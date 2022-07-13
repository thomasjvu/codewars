// (8 kyu) Calculate average
/* Instructions
 * Write a function which calculates the average of the numbers in a given list.

    Note: Empty arrays should return 0.
*/

// Solution
function findAverage(array) {
  let total = array.reduce((acc, curr) => acc + curr, 0)
  let avg = total / array.length
  return avg
}

// Explanation
// Average = Total / # of Elements
// Get the total using the array `.reduce()` method to add all the numbers into a single element
// Then, divide it by the length of the array using the array `.length' property.
