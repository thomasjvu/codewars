// (8 kyu) Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
/* Instructions
 * Description:

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples

remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/

// Solution
function remove (string) {
    return string.split('!').join('').concat('!')
}

// Explanation
// Use the .split('!') string method to split the string into an array that separates each element using the exclamation point as a separator and which will make sure that the exclamation points are not included in the array
// Use the .join('') array method to immediately join the elements back together, which will now not include any exclamation points
// Use the .concat('!') string method to concatenate an exclamation point character to the end of the string
// All of this returned will remove all the exclamation marks but ensure an exclamation mark at the end of the string
