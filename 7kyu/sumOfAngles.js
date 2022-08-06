// (7 kyu) Sum of Angles
/* Instructions
 * Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

// Solution
function angle(n) {
    return ((n-2) * 180)
}

// Refactored
const angle = n => (n-2) * 180

// Explanation
// This just requires knowing the formula for the sum of the angles of a simple polygon.
// (n-2) * 180; so with a triangle we get 180, and a square we get 360, so on and so forth...
