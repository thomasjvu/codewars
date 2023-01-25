// (7 kyu) Indexed Capitalization
/* Instructions
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

    capitalize("abcdef",[1,2,5]) = "aBCdeF"
    capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

The input will be a lowercase string with no spaces and an array of digits.

Good luck!

*/

// Solution
function capitalize(s, arr) {
    let newStr = ""
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(i)) {
            newStr += s[i].toUpperCase()
        } else {
            newStr += s[i]
        }
    }
    return newStr
}

// Explanation
// Instantiate a new empty string variable, newStr
// Loop through each index of the original string, s
// If the index number is included in the array (use the array .includes() method), then concatenate the corresponding string element (uppercased) to the newStr
// Or else, just concatenate that element to the newStr as is
// At the end of the loop, return newStr, which will have indexed capitalization
