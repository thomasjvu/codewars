// (8 kyu) Abbreviate a Two Word Name
/* Instructions
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// Solution
function abbrevName(name){
    name = name.split(' ');
    return `${name[0][0]}.${name[1][0]}`.toUpperCase();
}

// Explanation
// First, because we have the names separated by spaces, we can use the string .split(' ') method to put each name as its own index in a new array
// Then, we can return the 0th index of each array as a string to get the initials using template literals, and then use the string .toUpperCase() method to make each initial uppercase.
