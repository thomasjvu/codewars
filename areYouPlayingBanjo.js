// (8 kyu) Are You Playing Banjo?
/* Instructions
 * Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you are playing banjo!

    The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo" 
    name + " does not play banjo"

    Names given are always valid strings.
*/

// Solution
const areYouPlayingBanjo = name => (name[0].toUpperCase() === 'R') ? `${name} plays banjo` : `${name} does not play banjo`

// Explanation
// We can use arrow functions to simply the statement. Check the 0th index of the name and use the .toUpperCase() method to check against case sensitivity. Then, a ternary for the result.
