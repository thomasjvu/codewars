// (8 kyu) Return Negative
/* Instructions
 * In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

// Solution
function makeNegative(num) {
    return (num < 0) ? num : -num
}

// Refactored
const makeNegative = num => (num < 0) ? num : -num

// Explanation
// We use a conditional to check if num is less than 0 (negative) and if it is, then return the number as is, and if not, return the negative of the number.
