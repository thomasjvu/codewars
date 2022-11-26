// (8 kyu) Simple Calculator
/* Instructions
 * You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
Example:

calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

Good luck!
*/

// Solution
function calculator(a,b,sign){
  if (sign === '+') {
    return a + b
  } else if (sign === '-') {
    return a - b
  } else if (sign === '*') {
    return a * b
  } else if (sign === '/') {
    return a / b
  } else {
    return 'unknown value'
  }
}

// Explanation
// Use an if...else if... else statement to check each sign, and return the correct algorithim for the corresponding sign.
// If the sign is incorrect, return 'unknown value' instead of an algorithim
