// (7 kyu) Maximum Product
/* Instructions
 * Task

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Notes

    Array/list size is at least 2.

    Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples

adjacentElementsProduct([1, 2, 3]); ==> return 6

Explanation:

    The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

    adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

    Explanation:

Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

Explanation:

    The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/


// Solution
function adjacentElementsProduct(array) {

    let maxNum = 0
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            maxNum = array[i] * array[i + 1]
        } else if (array[i] * array[i + 1] > maxNum) {
            maxNum = array[i] * array[i + 1]
        }
    }
    return maxNum
}

// Explanation
// Instantiate a number to hold our max number
// Use a for loop to iterate through each element in the array.
// For the first iteration, set the maxNum variable equal to the first set of subsequent numbers
// Then, for each loop, check if the next set of subsequent numbers is greater than the current maxNum
// If it is, assign it to the new subsequent pair, otherwise do nothing
// At the end, return the final maxNum
