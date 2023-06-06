// (7 kyu) Return String of First Characters
/* Instructions
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"

Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

*/

// Solution
function makeString(s) {
    s = s.split(' ')
    let string = ''

    for (let i = 0; i < s.length; i++) {
        string += s[i][0]
    }

    return string
}

// Explanation
// Split the given string to an array
// Initialize a variable to hold our new string
// Loop through each element in the array, and for each element, concatenate the first letter to the new string variable
// After all the loops, return the now filled-out string variable
