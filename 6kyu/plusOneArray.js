// (6 kyu) +1 Array
/* Instructions
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

    the array can't be empty
    only non-negative, single digit integers are allowed

Return nil (or your language's equivalent) for invalid inputs.
Examples

Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer

*/

// Solution
function upArray(arr){

    // edge cases
    // if array is empty, return null
    if (arr.length === 0) return 0
    // if every element in array is not an integer and is not between 0 and 10 (exclusive) return null
    if (!arr.every(n => Number.isInteger(n) && n >= 0 && n < 10)) return null  

    // variables
    const result = []
    let carry = 1

    // loop through array from right to left, add the 'carry' value to each digit.
    for (let i = arr.length -1; i >= 0; i--) {
        // add 1 to last element
        const sum = arr[i] + carry
        // add the value to the beginning of the array
        result.unshift(sum % 10)
        // get the remainder after dividing the sum by 10, which becomes the carry
        carry = Math.floor(sum/10)
    }

    // if non-zero carry left, add the value to the beginning of the output array
    if (carry > 0) result.unshift(carry)

    return result
}
