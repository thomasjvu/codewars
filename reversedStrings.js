// (8 kyu) Reversed Strings
/* Instructions
 * Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow'
*/

// Solution

function solution(str){
  return str.split('').reverse().join('')
}

// Explanation
// To reverse a string, `.split()` it to an array, use the `.reverse()` method, and then `.join()` it back to a string.
