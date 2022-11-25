// (7 kyu) Number of Decimal Digits
/* Instructions
 * Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

// Solution
function digits(n) {
  let string = String(n)
  let count = 0
  for (let i = 0; i < string.length; i++) {
    count += 1
  }
  return count
}

// Explanation
// Create a string variable which converts the given number parameter into a string
// Create a number variable which will hold the count of each digit
// Loop through the string and add 1 to the count for each iteration
// Return the count
