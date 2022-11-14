// (7 kyu) Find the next perfect square!
/* Instructions
 * You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/

// Solution
const findNextSquare = sq => {
    if (Math.sqrt(sq) % 1 !== 0) {
        return -1
    } else {
        return ((Math.sqrt(sq) + 1) ** 2)
    }
}

// Explanation
// We can use an if..else statement combined with the Math.sqrt function to figure this solution out
// If the squareroot of the given parameter divided by 1 has a remainder of 0, that means it is a perfect square (not a decimal). So, if it does not have a remainder of 0, it is not a perfect square. Therefor for that statement, return -1 
// The else block should return the next square root. This can be obtained by using Math.square of the given parameter, adding 1, and then doing it to the power of 2 which will give us the next perfect square because we only added 1.
