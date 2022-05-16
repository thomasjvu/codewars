// (8 kyu) Type of sum
/* Instructions
 * Return the type of the sum of the two arguments
 */

// Solution
const typeOfSum = (a, b) => typeof (a + b)

// Explanation
// Use the typeof operator to return the datatype of the expression as a string
// Be sure to put (a + b) in parentheses so that no weird concatenation happens
