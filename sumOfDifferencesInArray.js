// (8 kyu) Sum of differences in array
/* Instructions
 * Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

// Solution
function sumOfDifferences(arr) {
  let diff = 0
  let diffArr = arr.sort((a,b) => b - a)
  for (let i = 0; i < diffArr.length - 1; i++) {
        diff += (diffArr[i] - diffArr[i+1])
      }
  return diff
}

// Explanation
// Instantiate a variable that will count for the sum of differences (diff)
// Create a sorted array in descending order using the arr.sort((a,b) => b - a) method
// Loop through each element in the array, with the conditional expression being that the loop counter must be less than the length -1
// for each iteration, add the value of the element at the loop counter and at the loopcoutner +1 to get the one next to it
// Then, return the sum of the differences of those numbers combined

