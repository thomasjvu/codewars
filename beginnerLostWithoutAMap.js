// (8 kyu) Beginner - Lost Without a Map
/* Instructions
 * Given an array of integers, return a new array with each value doubled.

    For example:

    [1, 2, 3] --> [2, 4, 6]

*/


// Solution
function maps(x) {
    return x.map(element => element * 2)
}

// Refactored
const maps = x => x.map(el => el * 2)

// Explanation
// This question is clearly asking us to use the `.map()` function
// We loop through each element and the callback function multiplies that element by 2 and maps to new array.
