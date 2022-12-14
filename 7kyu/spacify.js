// (7 kyu) Spacify
/* Instructions
 * Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

// Solution
function spacify(str) {
    return str.split('').join(' ')
}

// Explanation
// Use the string `.split('')` method to split each character into an array element
// Use the array `.join(' ')` method to join the array into a string with a space between each element 
