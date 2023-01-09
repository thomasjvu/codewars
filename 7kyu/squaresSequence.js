// (7 kyu) Squares Sequence
/* Instructions
 * Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

*/

// Solution
const squares = (x, n) => {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            arr.push(x ** 1)
        } else {
            arr.push(arr[i-2] ** 2)
        }
    }
    return arr
}

// Explanation
// Instantiate an empty array variable
// Loop through each number from 1 to n (given)
// For the first number, push x (given) to the empty array
// For each number afterwards, push the previous array variable (index 0) to the power of 2 to the array
// Return the array
