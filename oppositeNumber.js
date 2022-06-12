// (8 kyu) Oppsite number
/* Instructions
 * Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

// Solution
function opposite(number) {
    return number *= -1
}

// Refactored
const opposite = number => -number

// Explanation
// To get the reverse of a number, we simply need to multiply it by negative 1
// Or, we can use the unary operator (-)
