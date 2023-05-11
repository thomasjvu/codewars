// (8 kyu) Reversed Strings
/* Instructions
 * Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow'
*/

/* Solution (JavaScript) */
function solution(str){
  return str.split('').reverse().join('')
}

// Explanation
// To reverse a string, `.split()` it to an array, use the `.reverse()` method, and then `.join()` it back to a string.

/* Solution (TypeScript) */
// export function solution(str: string): string {
//     return str.split('').reverse().join('')
// }

/* Solution (TypeScript => Arrow Function) */
// export const solution = (str: string): string => str.split('').reverse().join('')

// identify the parameter str as a string type
// identify the function return to be a string type
