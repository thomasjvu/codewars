// (8 kyu) Contamination #1 -String-
/* Instructions
 * An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
Example

text before = "abc"
character   = "z"
text after  = "zzz"
*/

// Solution
function contamination(text, char){
    let str = ""
    for (let i = 0; i < text.length; i++) {
        str += char
    }

    return str
}

// Explanation
// Declare a new empty string
// Use a for loop through iterate through each element within the given text.
// For each iteration, concatenate the given char to the existing string
// Return the new filled out string

// Refactored
const contamination = (text, char) => char.repeat(text.length)

// Explanation
// Use the string `.repeat(x)` method to repeat a string (char) x number of times, where x is the numerical length of the given text parameter.

