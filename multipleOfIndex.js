// (8 kyu) Multiple of Index
/* Instructions: 
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

*/

// Solution
function multipleOfIndex(array) {
    return array.filter((element, index) => element % index === 0)
}

// Solution (refactored)
const multipleOfIndex = (array) => array.filter((element, index) => element % index === 0)

// Explanation

/* We can return a new array using the array `.filter()` method
 * The `.filter()` syntax can grab the element, index, and array, and use it in a callback function to iterate
 * and filter through each element in the array.
 * If the remainder of the element divided by the index is 0, we know that the element is a multiple of the index.
 */
