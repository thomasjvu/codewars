// (7 kyu) Summing a number's digits
/* Instructions:
 * Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/


// Solution
function sumDigits(number) {
  number = Math.abs(number).toString()
  let sum = 0
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i])
  }
  return sum
}

/* Explanation
 * If we sum the digits only, negatives don't matter so I get the absolute value of the number
 * Then, we turn it into a string so we can iterate through each digit
 * Declare a new variable to be used as the sum
 * Then, I loop through each character in the string and add it to the sum as a number
 * Finally, return the sum
 */

// Refactoring
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc, curr) => acc + Number(curr), 0)
}

/* Explanation
 * This can also be done using the reduce function by turning the number into a string, then split to an array and using the reduce method to bring the array down to a single value. It will be an array of string, so the Number() primitive wrapper (constructor) must be used.
