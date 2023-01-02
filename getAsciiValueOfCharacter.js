// (8 kyu) Get Ascii Value of Character
/* Instructions
 * Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
*/

// Solution
function getASCII(c) {
    return c.charCodeAt()
}

// Explanation
// Use the string `.charCodeAt()` method to get the ASCII value of a string at a certain index
// Because there is no index, we can leave the argument within the method to be blank
