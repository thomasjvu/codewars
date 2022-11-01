// (6 kyu) Sort the odd
/* Instructions
 * Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

    [7, 1]  =>  [1, 7]
    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// Solution
function sortArray(array) {
    const oddArray = array.filter((element) => element % 2 !== 0).sort((a,b) => a - b)
    return array.map((element) => element % 2 !== 0 ? oddArray.shift() : element)
}


// Explanation
// First, create a new array that filters out the odd elements using a callback function with modulus operator
// Then, sort that new array in ascending order using `.sort((a,b) => a-b)
// Then create another new array by mapping the initial given array, and shifting the element of the odd array if
// the element is odd, and if its not odd then place the element instead
