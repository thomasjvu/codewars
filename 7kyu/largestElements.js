// (7 kyu) Largest Elements
/* Instructions
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

// Solution
function largest(n, array) {

    // sort in ascending order
    array = array.sort((a, b) => a - b)

    // get a slice that gets the last N elements of the array
    return array.slice(array.length - n, array.length)
}


