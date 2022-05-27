// (8 kyu) Sort and Star
/* Instructions
 * You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

// Solution
function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

// Explanation
// First, sort the array using the `.sort()` method and then grab the 0th index of that array.
// Then, split the corresponding string element using the `.split('')` method
// Finally, join it together using the .join('***') method to jjoin each element of the array with *** in between.
