// (8 kyu) Simple Comparison?
/* Instructions
 * Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
*/

// Solution
const add = (a, b) => (a == b)

// Explanation
// Arrow functions have an implicit return, so it is simpler to use ES6 syntax
// The comparison will either return true or false
// 2 equal signs is value, three is value and type which we don't need.
