// (7 kyu) Form The Minimum
/* Instructions
 * Explanation:

(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)

Explanation:

(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

Explanation:

(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 
*/

// Solution
function minValue(values) {
    let arr = Array.from(new Set(values))
    return Number(arr.sort().join(''))
}

// Refactored
const minValue = values => {
    let arr = Array.from(new Set(values))
    return Number(arr.sort().join(''))
}

// Explanation
// The Array.from() method will give us a new array with the provided argument
// The provided argument is a `new Set()` object, which takes in all the values and returns only the unique ones 
// Now, this will provide us with an array of only unique values
// Use the .sort() method to sort in ascending order
// Then use the .join() method to convert it into a string, which will concatenate as digits
// Finally, use the Number wrapper to convert the string into a number
