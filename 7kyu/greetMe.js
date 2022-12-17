// (7 kyu) Greet Me
/* Instructions
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

// Solution
const greet = name => `Hello ${name[0].toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`

// Explanation
// Do string interpolation using backticks to easily add values within a string.
// Use the .toUpperCase() method on the first character of the name string (index 0)
// Slice the remaining part of the string starting from element 1 and ending at the length of the entire string
// Use the .toLowerCase() method on the sliced out part of the string
// Return the new string with its values
