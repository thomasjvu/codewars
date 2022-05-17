// (8 kyu) Removing Elements
/* Instructions
 * Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// Solution
function removeEveryOther(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Refactored
const removeEveryOther = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Explanation
// Create a new empty array which will hold all of kept array Elements
// loop through each array, and if the modulus is 0, we should keep that element
// push all of the even array elements into the new array
// finally, return the new array
