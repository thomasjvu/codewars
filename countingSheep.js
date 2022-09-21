// (8 kyu) Counting sheep...
/* Instructions
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// Solution
function countSheeps(arrayOfSheep) {
    let count = 0
    for (let i = 0; i <= arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count += 1
        }
    } return count
}

// Solution (refactored)
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length
}

// Explanation
// The `.filter(Boolean)` passes each item in the array to the Boolean() object. 
// Then, the `Boolean()` object coerces each item to true or false depending on its truthy or falsy value
// If the item is truthy, we keep it
// Then, we get the length of the array of truthy values.
