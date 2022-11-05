// (7 kyu) Mumbling
/* Instructions
 * This time no story, no theory. The examples below show you how to write function accum:
    Examples:

    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

// Solution
function accum(s) {
  
 return s
  .split('')
  .map((element, index) => element.toUpperCase() + element.toLowerCase().repeat(index))
  .join('-')
}

// Explanation
// First, we take the given string and split it into an array using the `.split('')` method
// Then, we map the array, getting each element and index as a property
// In the map method, use a callback function which will set the element to uppercase, and concatenate the lowercase element the same number of times as there is the index using the `.repeat()` method.
// Finally, join each element in the array together to make one big string, joining each element with a hyphen
