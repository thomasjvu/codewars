// (7 kyu) Substituting Variables Into Strings: Padded Numbers
/* Instructions
*/

// Solution
const solution = value => `Value is ${String(value).padStart(5, "0")}`

// Explanation
// Arrow function implicit return of an interpolated string that 
// Uses the .padStart() string method to put "0" in front of our String until the digits reach 5.
