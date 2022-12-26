// (8 kyu) Find Nearest Square Number
/* Instructions
 * Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers

*/


// Solution
const nearestSq = n => Math.round(Math.sqrt(n)) ** 2

// Explanation
// Get the square root of the given argument n
// Round it to the nearest integer
// Raise the rounded integer to the power of 2
// This will deliver the nearest square number
