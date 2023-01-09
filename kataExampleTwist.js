// (8 kyu) Kata Example Twist
/* Instructions
 * This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.
*/

// Solution

const websites = new Array(1000).fill('codewars')

// Explanation
// Use the new Array constructor to create a new array with (1000) as an argument to have it take 100 spaces.
// Then, use the .fill() method to fill each space with the same string, 'codewars'.
