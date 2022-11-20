// (7 kyu) Sorted? yes? no? how?
/* Instructions
 * Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

// Solution
function isSortedAndHow(array) {
    return array.every((x,i) => i == 0 || array[i] >= array[i-1]) ? 'yes, ascending' :
           array.every((x,i) => i == 0 || array[i] <= array[i-1]) ? 'yes, descending' : no
}

// Explanation
// Use the array.every function to test whether or not the array is element is greater than or less than the element that comes before it. If the value of the array index is greater than the one before it, return ascending, and if it is less than, return descending. If at any time it goes out of order, return no.
