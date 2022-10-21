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
