// (7 kyu) Count the divisors of a number
/* Instructions
 * Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

// Solution
function getDivisorsCnt(n) {
    let cnt = 0
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            count += 1
        }
    }
    return count
}

// Explanation
// First, declare a new number variable equal to 0 to start (count)
// Loop through each number, starting from 0 to the given parameter (n)
// Use the loop counter to check if n divided by the loop counter gives a remainder of 0
// If it does, then that expression is a divisor of the given parameter, so add 1 to the count
// Once the loop is finished and we have our total count, return it.
