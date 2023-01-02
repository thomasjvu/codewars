// (7 kyu) Alternate case
/* Instructions
 * Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

// Solution
function alternateCase(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if ( s[i] === s[i].toUpperCase() ) {
      arr.push(s[i].toLowerCase())
    } else if ( s[i] === s[i].toLowerCase() ) {
      arr.push(s[i].toUpperCase())
    }
  }
  return arr.join('');
}

// Explanation
// Instantiate a new empty array, arr
// Loop through each character in the string
// If the character in the string is equal to the uppercase() equivalent, push the lowercase() equivalent to the array
// Else if the character in the string is equal to the lowercase() equivalent, push the uppercase() equivalent to the array
// At the end of the loop, return the array joined together using the .join('') method
