// (7 kyu) Greatest Common Divisor
/* Instructions
 * Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

// Solution
function mygcd(x, y){
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i
        }
    }
}

// Explanation
// Use a for...loop, where i is equal to the Min of the given numbers, either x or y
// Use i-- as the final expression
// If x and 7 are both divisible by i with a remainder of 0, that is the GCD
// So, return i
