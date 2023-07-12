// (7 kyu) Vowel one
/* Instructions
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/

// Solution
function vowelOne(s) {
    // init var holding all vowels
    const vowels = "aeiou";
    // init var for empty string
    let string = "";

    // iterate through given string, and check if it is a vowel
    for (let i = 0; i < s.length; i++) {
        // if vowel, concatenate "1" to new string
        if (vowels.includes(s[i].toLowerCase())) {
            string += "1";
        // otherwise, concatenate "0" to new string
        } else {
            string += "0";
        }
    }

    // return the new string
    return string;
}
