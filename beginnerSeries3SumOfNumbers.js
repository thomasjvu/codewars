// (7 kyu) Beginner Series #3 Sum of Numbers
/* Instructions
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// Solution
function getSum(a, b) {
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    return (max - min + 1) * (max + min) / 2
}

// Explanation
// The mathematical formula for the Sum of Consecutive Integers between two numbers is: S = n(f + l) / 2
// n = number of integers
// f = first item
// l = last item
// To get the number of integers (inclusive), subtract the max from the min and add 1
// Then, follow and return the rest of the formula
