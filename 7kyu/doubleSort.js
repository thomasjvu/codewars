// (7 kyu) Double Sort
/* Instructions
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/

// Solution
function dbSort(a) {
    // filter by number type, then use sort((a, b) => a - b) to sort numbers in ascending order
    let numberArr = a.filter((e => typeof e === 'number')).sort((a, b) => a - b)

    // filter by string type, then use the default .sort() method to sort in alphabetical order
    let stringArr = a.filter((e => typeof e === 'string')).sort()

    // use the .concat method to join two arrays
    return numberArr.concat(stringArr)
}
