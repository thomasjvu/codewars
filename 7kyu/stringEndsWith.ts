// (7 kyu) String ends with?
/* Instructions
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

// Solution
export const solution = (str: string, ending: string): boolean => (str.endsWith(ending)) ? true : false

// Explanation
// Use a ternary to return either true or false (as the solution function expects a boolean)
// Use the .endsWith method to check if the given string ends with the ending string provided
