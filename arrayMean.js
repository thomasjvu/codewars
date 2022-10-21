// (8 kyu) Grasshopper - Array Mean
// Instructions
// Find the mean (average) of a list of numbers in an array.


// Solution
var findAverage = function (nums) {
  let avg = 0
  for (let i = 0; i < nums.length; i++) {
    avg += nums[i]
  } return avg/nums.length
}

// Solution (Refactored)
var findAverage = function (nums) {
    return nums.reduce((acc, curr) => acc + curr, 0) / nums.length
}

// Explanation
// The `reduce()` method enables us to take the previous value and current value as parameters and reduce the items in an array into a single element. Then, we simply divide our reduced array by th elength of the original array.
