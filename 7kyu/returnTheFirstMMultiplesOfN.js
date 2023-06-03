// (7 kyu) Return the first M multiples of N
/* Instructions
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)

should return

[5.0, 10.0, 15.0]


*/

// Solution
function multiples(m, n) {
    let multiplesArr = []
    for (let i = 1; i <= m; i++) {
        multiplesArr.push(n * i)
    }

    return multiplesArr
}

// Explanation
// Create an empty array to hold the multiples
// Loop from 1 to m, using i as the loop counter
// For each iteration, push n * i to the multiplesArray
// This enables us to return the multiplesArr filled out in O(n) time complexity


