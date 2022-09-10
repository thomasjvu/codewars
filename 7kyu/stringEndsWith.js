// (7 kyu) String ends with?
// Instructions
/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/


// Solution
function solution(str, ending){
  if (str.endsWith(ending) === true) {
    return true
  } else {
    return false
  }
}

// Refactored
const solution = (str, ending) => str.endsWith(ending) === true


// We have 2 strings
// These 2 strings are the original string, and our ending check condition
// They are always going to be string values, never empty 

// So, we want to check what the length of the ending string is, and see if the that is equal to the ending of the OG string.
// Use the `.endsWith()` string method to check if the attached string has the argument inside of the parentheses
// str.endsWith(ending) will return true if the string has the ending
// so, we can return true if this is true, and false if it is false
