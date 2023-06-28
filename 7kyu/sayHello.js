// (7 kyu) Say hello!
/* Instructions
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null

*/

// Solution
const greet = name => (!name) ? null : `hello ${name}!`

// Explanation
// Check if name is falsy, and if so, return null, otherwise, return the hello statement interpolated with the given name.
