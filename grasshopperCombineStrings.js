// (8 kyu) Grasshopper - Combine Strings
/* Instructions
 * Combine strings function

    Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

    Example:

    combineNames('James', 'Stevens')

    returns:

    'James Stevens'
*/

// Solution
const combineNames = (first, last) => first + ' ' + last

// Explanation
// Use string concatenation to add the first and last names together. Make sure to add a space in between by concatenating an empty string ' ' between the first and last name concatenation.
