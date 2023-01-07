// (7 kyu) Alternative Capitalization
/* Instructions
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

// Solution
function capitalize(s) {
    let upperFirst = []
    let lowerFirst = []
    s = s.split('')

    for (i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            upperFirst.push( s[i].toUpperCase() )
            lowerFirst.push( s[i].toLowerCase() )
        } else {
            upperFirst.push( s[i].toLowerCase() )
            lowerFirst.push( s[i].toUpperCase() )
        }
    }

    return [upperFirst.join(''), lowerFirst.join('')]
}
// Explanation
// Instantiate a new empty array variable to hold the string where uppercase will be capitalized first, upperFirst
// Instantiate a new empty array variable to hold the string where lowercase will be capitalized first, lowerFirst
// Loop through each element of the given string, s
// For each iteration, check if the index is even or odd
// Then, push the lowercase equivalent to lowerFirst and the uppercase equivalent to upperFirst for each even iteration
// Then, push the uppercase equivalent to lowerFirst and the lowercase equivalent to upperFirst for each odd iteration
// Finally, return a new array with both arrays joined together as separate but single strings in the array
