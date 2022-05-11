// (8 kyu) Printing Array elements with Comma Delimiters
/* Instructions
 * Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level
*/

// Solution

function printArray(array){
    return array.join()
}

// Refactored
const printArray = array => array.join()

// Explanation
// We can just use the `.join()` method without any arguments to join the array elements into a string.
