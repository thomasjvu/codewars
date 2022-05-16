// (7 kyu) Sum of Cubes
/* Instructions
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/



// Solution
function sumCubes(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i ** 3
    }
    return sum
}

// Explanation
// Instantiate a number variable to hold our sum and set it equal to 0 to start
// Loop through every number from 1 to the given parameter n
// For each iteration, add the numbers cubed value to the sum
// Finally, return the sum after all the iterations

