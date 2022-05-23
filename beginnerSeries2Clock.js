// (8 kyu) Beginner Series #2 Clock
/* Instructions
 * Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

// Solution
const past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000)

// Explanation
// Simple maths
// 1000 milliseconds in a second
// 60000 milliseconds in a minute
// 3,600,000 milliseconds in an hour
