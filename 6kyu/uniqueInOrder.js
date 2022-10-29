// (6 kyu) Unique In Order
/* Instructions
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

    For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// Solution
let uniqueInOrder = iterable => [...iterable].filter((element, index) => element != iterable[index+1])

// Explanation
// Use the spread operator to spread each item in the array, then filter it to see if each element is equal to
// the next in the original array by specifiying iterable[index+1]
// Use arrow function syntax to simplify our function
