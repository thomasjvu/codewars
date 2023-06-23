// (7 kyu) Basic Sequence Practice
/* Instructions
A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3

Your Task

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
Examples

 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]

*/

// Solution
function sumOfN(n) {
    let arr = [0]
    let sum = 0

    for (let i = 1; i < Math.abs(n) + 1; i++) {
        sum += i

        if (n < 0) {
            arr.push(-sum)
        } else {
            arr.push(sum)
        }
    }

    return arr
}

// Explanation
// Loop through the element N (absolute val cause it can be negative) times.
// For each iteration, add the loop counter value to the sum
// If n happened to be negative, we now push the negative equivalent of the new sum onto the array
// Otherwise, we push the positive sum onto the array
