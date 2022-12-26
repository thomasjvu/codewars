// (8 kyu) Exclamation marks series #2: Remove all exclamation marks from the end of sentence
/* Instructions
 * Description:

Remove all exclamation marks from the end of sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

// Solution
const remove = string => {
    while (string[string.length-1] === '!') {
        string = string.slice(0, -1)
    }
    return string
}

// Explanation
// Use a while loop to iterate any unknown number of times, the condition being that the last element is equal to an exclamation point
// If it is, then assign the string equal to the value of the string with the last element sliced out with the `string.slice(0, -1)` method
// Return the string
