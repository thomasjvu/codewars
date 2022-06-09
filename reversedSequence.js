// (8 kyu) Reversed Sequence
/* Instructions
 * Build a function that returns an array of integers from n to 1 where n>0.

    Example : n=5 --> [5,4,3,2,1]
*/

// Solution
const reverseSeq = n => {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.unshift[i]
    }
    return arr
}

// Explanation
// Create a new array and loop through 1 to the given number, adding each iteration to the beggining of the array using the `.unshift()` method to receive a sequence in the reversed order
