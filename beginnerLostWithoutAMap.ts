// (8 kyu) Beginner - Lost Without a Map
/* Instructions
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

// Solution
export const maps = (x: number[]): number[] => x.map(num => num * 2)


// Explanation
// Use the .map method to return a new array of numbers that doubles each number in the original array (x) by 2
