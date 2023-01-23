// (8 kyu) Ensure Question
/* Instructions
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/

// Solution
const ensureQuestion = s => {
    if (s.endsWith('?')) return s
    return s + '?'
}

// Explanation
// Use the string .endsWith() method to check if a string ends with a certain value, which in this case is ?
// If it does, return s
// Otherwise, that statement will not be valid, and we will move to the return, which return s with a ? concatenated.
