// (6 kyu) Break camelCase
/* Instructions
 * Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// Solution
function solution(string) {
    let newStr = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            newStr += ' '
            newStr += string[i]
        } else {
            newStr += string[i]
        }
    }
    return newStr
}

// Explanation
// Create a new string variable
// Loop through the original string variable for its entire length
// If the character being iterated through is equal to its uppercase, then add a space and the character to the new string
// Otherwise, just add the character to the new string
// The new string will then have camel case broken by spaces
// return the new string
