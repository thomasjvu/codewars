// (7 kyu) Evens and Odds
/* Instructions
This kata is about converting numbers to their binary or hexadecimal representation:

    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.

Numbers will be positive. The hexadecimal string should be lowercased.
*/

// Solution
function evensAndOdds(num) {
    if (num % 2 === 0) {
        return num.toString(2)
    } else {
        return num.toString(16)
    }
}

// Explanation
// Check if the given argument is even or odd using modulus, where if num % 2 === 0, the number is even and otherwise it is odd
// To get the binary representation of a number, use the .toString(2) method
// To get the hexadecimal representation of a number, use the .toString(16) method
// Return the correct expression based on the num being either even or odd
