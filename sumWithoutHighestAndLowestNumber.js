// (8 kyu) Sum Without Highest and Lowest Number
/* Instructions
 * Task

    Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

    The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

    Mind the input validation.
    Example

    { 6, 2, 1, 8, 10 } => 16
    { 1, 1, 11, 2, 3 } => 6

    Input validation

    If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/  


// Solution
function sumArray(array) {
  if (array && array.length > 1) {
    array.sort((a,b) => a-b)
    array.pop()
    array.shift()
    return array.reduce((acc, curr) => acc + curr, 0)  
    } else {
      return 0
    }
}

// Explanation
// First, we want to check if the array is indeed an array and if the array length is greater than 1, or else we will default to 0
// if the conditions are true, then we `.sort()` the array, `.pop()` the last value, `.shift()` the first value, and then sum the rest of the elements using the `.reduce()` method.
