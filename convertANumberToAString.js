// (8 kyu) Convert a Number to a String!
/* Instructions
 * We need a function that can transform a number (integer) into a string.

    What ways of achieving this do you know?
    Examples (input --> output):

    123  --> "123"
    999  --> "999"
    -100 --> "-100"
*/  

// Solution
function numberToString(num) {
    return String(num)
}

// Refactored
const numberToString = num => String(num) 

// Explanation
// Use the `.String()` wrapper to convert a number to a string object
