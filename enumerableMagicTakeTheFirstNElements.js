// (8 kyu) Enumerable Magic #25 - Take the First N Elements
/* Instructions
 * Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

// Solution
function take(arr, n) {
    return arr.slice(0, n)
}

 
// Refactored
const take = (arr, n) => arr.slice(0, n)

// Solution
// The array `.slice()` method will take two arguments; the index to start at, and the index that we want to slice up to
// So, if we want the first N elements, we must start at 0 because arrays are 0-based
// Then, we will stop at index n (exclusive)
// So, the returned array will give us the first n elements
