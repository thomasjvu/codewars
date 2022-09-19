// (8 kyu) Sum of Positive
/* Instruction
 * You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

// Solution
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i]
    }
  }
  return sum
}

// Solution (Refactored)
function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((acc, curr) => acc + curr, 0)
}

// Explanation
// Use the `.filter()` method to only get the elements in the array that are greater than or equal to 0.
// Then, use the `.reduce()` method to reduce the remaining elements in the array to a single number.
