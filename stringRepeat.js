// (8 kyu) String repeat
/* Instructions
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Solution
function repeatStr (n, s) {
  return s.repeat(n)
}

// Refactored
const repeatStr = (n, s) => s.repeat(n)

// Explanation
// Use the string .repeat() method to return a new string that repeats the original string however many times is specified as an argument
