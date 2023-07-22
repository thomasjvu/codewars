// (6 kyu) Array Deep Count
/* Instructions
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Examples

[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

The input will always be an array.
*/

// Solution
function deepCount(a) {
    // init count var
    let count = 0

    // if length of array is 0, return count as 0
    if (a.length === 0) return count

    // loop through elements in the array
    for (let i = 0; i < a.length; i++) {
        const element = a[i]

        // if element is an array, increment the count and recursively call the deepCount function
        if (Array.isArray(element)) {
            count++
            count += deepCount(element)
        } else {
            // otherwise, just increment the count
            count++
        }
    }
    return count
}
