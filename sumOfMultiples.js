// (8 kyu) Sum of Multiples
/* Instructions
 * Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

// Solution
function sumMul(n,m) {

    let sum = 0
    
    if (m <= 0) return "INVALID"

    for (let i = 1; i < m; i++) {
        if (i % n === 0) {
            sum += i
        }
    }

    return sum

}

// Explanation
// If M is 0 or less, return INVALID as shown in the example
// Declare a new variable and assign it the value of 0
// Loop through each number from 1 to m (exclusive)
// Use the modulus operator to check if the remainder of i divided by n is 0, and if so, it is a multiple
// If it is a multiple, add that number to the sum
// Return the sum
