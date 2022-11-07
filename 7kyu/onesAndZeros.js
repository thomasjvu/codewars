// (7 kyu) Ones and Zeros
/* Instructions
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
*/

// Solution
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

// Explanation
/* First, join the array together as a string using the `.join('')` method.
 * Then, turn that string into a number using the parseInt(string, 2), where the 2 selects the base 2 which is binary.
 * The result will be the array as a string turned into a binary number
