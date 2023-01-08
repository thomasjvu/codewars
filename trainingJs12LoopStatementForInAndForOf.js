// (8 kyu) Training JS#12: loop statement --for..in and for..of
/* Instructions
 * Task

The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use for..in in your code, otherwise your solution may not pass this kata.
*/

// Solution
function giveMeFive(obj) {
    let arr = []
    for (const key in obj) {
        if (key.length == 5) {
            arr.push(key)
        } else if (obj[key].length == 5) {
            arr.push(obj[key])
        }
    }

    return arr
}

// Explanation
// Instantiate an empty array variable, arr
// Loop through each key in the object using a for..in loop
// If the length of the key is equal (==) to 5, push the key into the array
// If the length of the key's value is equal to 5, push the key's value into the array
// Return the array
