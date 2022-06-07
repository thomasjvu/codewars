// (8 kyu) Beginner - Reduce but Grow
/* Instructions
 * Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// Solution
function grow(x) {
    return x.reduce((acc, curr) => acc *= curr, 1)
}

// Explanation
// When asked to reduce an array to a single value, we should think of the .reduce() method.
// Start the method at 1 instead of 0, because anything multiplied by 0 will equal to 0.
// Then, use the *= operator to continuing multiplying the accumulation to the current value of the array index.
// When that value is returned, it will be the array reduced but multipled together.
