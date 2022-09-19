// (8 kyu) Remove exclamation marks
/* Instructions
 * Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

// Solution
function removeExclamationMarks(s){
    return s.split('!').join('')
}

// Explanation
// Use the string `.split(!)` method to split the string into an array, using the exclamation point as the breakpoint. Then, join the array back into a string with the array `.join()` method.
