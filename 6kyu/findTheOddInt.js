// (6 kyu) Find the odd int
/* Instructions
 * Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// Solution
const findOdd = A => A.reduce((a,b) => a ^ b)

// Explanation
// We can use the reduce function paired with the bitwise operator XOR to check if two values are the same.
// Xor takes two numbers and compares the bits, returning 1 for different bits and 0 for the same.
// Eventually, once it loops through everything, the element from the reduce will be the first unique digit that it encounters.
