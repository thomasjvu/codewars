// (6 kyu) Find the Unique Number

/* Instructions:
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

// Solution:

function findUniq(arr) {
  arr.sort() // sort array in ascending order (default)
  return (arr[0] !== arr[1]) ? arr[0] : arr.pop() 
  // if element at index 0 isn't equal to index 1, return that element, or else, remove that item from the array 
  // this will continue until it leaves us with the unique element in the array
}
