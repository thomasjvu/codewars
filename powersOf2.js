// (8 kyu) Powers of 2
/* Instructions
 * Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

// Solution
function powersOfTwo(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i)
    }
    return arr
}

// Explanation
// Instantiate a new array
// Loop starting from 0, and up until the given number, n
// Push each iteration into the new array, which will be the 2 to the exponent of the loop counter
// This will provide an array of the powers of 2
