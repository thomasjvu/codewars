// (8 kyu) Is there a vowel in there?
/* Instructions
 * Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/


// Solution
function isVow(a){
  let arr = []
  
  for (i = 0; i < a.length; i++) {
    if (String.fromCharCode(a[i]) === 'a') {
      arr.push('a')
    } else if (String.fromCharCode(a[i]) === 'e') {
      arr.push('e')
    } else if (String.fromCharCode(a[i]) === 'i') {
      arr.push('i')
    } else if (String.fromCharCode(a[i]) === 'o') {
      arr.push('o')
    } else if (String.fromCharCode(a[i]) === 'u') {
      arr.push('u')
    } else {
      arr.push(a[i])
    }
  }
  
  return arr
  
}

// Explanation
// Instantiate a new empty array to hold our elements
// Use a for loop to iterate through each element in the array
// Use the String.fromCharCode() method to turn the character code into a string
// If the resulting string is equal to a vowel, then we push that vowel to our new array
// If not, we push the array element as it is into the new array
// Return the new array
