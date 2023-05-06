// (7 kyu) Simple remove duplicates
/* Instructions
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:

For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3

Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!

*/

// Solution
// function solve(arr) {  
//   // loop through each item compared to each item
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       // if the item are equal and the indexes are not, remove the previous item and push back the indexes
//       if (arr[i] === arr[j] && i !== j) {
//         arr.splice(i, 1)
//         j--
//         i--
//       }
//     }
//   }
//   return arr
// }
// Time Complexity: O(n^2), Quadratic Time - Nested For Loop

// Solution 2
const solve = arr => arr.filter((el, i) => arr.lastIndexOf(el) == i)

// Explanation
// Use the .filter method to return only elements where the index is the last index of the element

