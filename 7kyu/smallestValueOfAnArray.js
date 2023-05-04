// (7 kyu) Smallest value of an array
/* Instructions
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

*/

// Solution
function min(arr, toReturn) {
    // get min of array values using spread operator
    let value = Math.min(...arr)
    // get index of that value using .indexOf
    let index = arr.indexOf(value)

    // use conditional to return either value or index depending on value of toReturn variable
    if (toReturn === 'value') {
        return value
    } else if (toReturn === 'index') {
        return index
    }
}
