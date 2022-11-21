// (7 kyu) Build a Square
/* Instructions
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Example

n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

// Solution
function generateShape(integer) {
    return ('+'.repeat(integer) + '\n').repeat(integer).trim()
}

// Refactored
const generateShape = integer => ('+'.repeat(integer) + '\n').repeat(integer).trim()

// Explanation
// Use the `.repeat()` string method to repeat a string a given number of times, which in this case will be the parameter of integer. Add '\n' to line break at the end of the repeat to break a new line. Then, repeat that the same number of times as the parameter integer. Finally, use the .trim() method to get rid of all the white space.
