// (8 kyu) You only need one - Beginner
/* Instructions
 * You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// Solution
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]=== x) {
      return true
    }
  } return false
}

// Explanation
// We have an array and a value
// Use a for loop to iterate through each element in the array to check if one of them equals the value
// If it does, return true, if not, return false

