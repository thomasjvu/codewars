// (7 kyu) Basic Math (Add or Subtract)
/* Instructions
 
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.
Examples

"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

*/

// Solution
const calculate = str => {
    str = str.replaceAll('plus', '+').replaceAll('minus', '-')
    return `${eval(str)}`
}

// Explanation
// The `eval()` method can take a string and evaluate it arithmatically. However, it is a security risk! Don't use it in a production application.
