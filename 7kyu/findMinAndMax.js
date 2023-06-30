// (7 kyu) Find min and max
/* Instructions
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

// Solution
function getMinMax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
}

// Explanation
// Use the spread operator with the Math.min() and Math.max() methods to properly iterate through the array and find the min and max values
// Return the min and max values as an array in the order min, max
