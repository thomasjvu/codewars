// (8 kyu) Check same case
/* Instructions
 * Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

// Solution
function sameCase(a, b){
  if ( a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase() ) {
    return -1
  } else if ( a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase() ) {
    return 1
  } else {   
    return 0;
  } 
}

// Explanation
// If the toUpperCase() and toLowerCase() values are the same, it must not be a letter, so return -1
// Or else if both numbers are equal to either their toUpperCase() or toLowerCase() equivalents, return 1
// Else, it must mean the toUpperCase() and toLowerCase() values are not the same, return 0
