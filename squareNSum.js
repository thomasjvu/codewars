// (8 kyu) Square(n) Sum
/* Instructions
 *
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// Solution
function squareSum(numbers){
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2 
  }
  return sum
}

// Explanation
// Instantiate a new variable named sum and set it equal to 0
// Loop through each element in the numbers array, and add the value of each index in the array to the 2nd power using the ** operator and add it to the sum variable
// return the sum variable
