// (7 kyu) Difference Of Squares
/* Instructions
Recreation of Project Euler problem #6

Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
Example

For example, when n = 10:

    The square of the sum of the numbers is:

    (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

    The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
*/

// Solution
function differenceOfSquares(n) {
    let squareOfSum = 0
    let sumOfSquares = 0
    for (let i = 1; i <= n; i++) {
        squareOfSum += i
        sumOfSquares += i ** 2
    }
    squareOfSum = squareOfSum ** 2
    return squareOfSum - sumOfSquares
}

// Initialize a number variable, squareOfSum, and set it equal to 0
// Initialize another number variable, sumOfSquares, and set it equal to 0
// Loop through each number frrom i to N (inclusive), where i starts at 1 and increments by 1
// For each iteration, add i to the squareOfSum variable
// For each iteration, add i squared to the sumOfSquares variable
// Once the loop is finished, raise the squareOfSum variable to the power of 2
// Finally, return the difference between squareOfSum - sumOfSquares
