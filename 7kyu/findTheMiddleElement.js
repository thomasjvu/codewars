// (7 kyu) Find the middle element
/* Instructions
 * As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

// Solution
function gimme (triplet) {
  for (let i = 0; i < triplet.length; i++) {
    if (i === 0) {
      if (triplet[i] < triplet[i+1] && triplet[i] > triplet[i+2]) {
        return i
      } else if (triplet[i] > triplet[i+1] && triplet[i] < triplet[i+2]) {
        return i
      }
    } else if (i === 1) {
      if (triplet[i] > triplet[i+1] && triplet[i] < triplet[i-1] ) {
        return i
      } else if (triplet[i] < triplet[i+1] && triplet[i] > triplet[i-1]) {
        return i
      }
    } else if (i === 2) {
      return i
    }
  }
}

// Explanation
// Loop through each index from 0 to the length of the triplet
// if the index is 0, check the two conditions where it might be the middle value (greater than one element and less than another element). If it is, return 0.
// if the index is 1, do the same by checking the two conditions where it might be the middle value. If it is, return 1.
// if neither index 0 or index 1 are the middle elements, then index 2 must be the middle element, so return 2.
