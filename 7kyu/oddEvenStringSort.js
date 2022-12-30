// (7 kyu) Odd-Even String Sort
/* Instructions
 * Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces

input: 'CodeWars'

output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'

Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
*/

// Solution
function sortMyString(S) {
    let even = []
    let odd = []

    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            even.push(S[i])
        } else {
            odd.push(S[i])
        }
    }

    return even.join('') + ' ' + odd.join('')
}

// Explanation
// Declare an empty array to hold our even characters
// Declare an empty array to hold our odd characters
// Loop through each element in the given string
// If the index of the string can be divided by 2 with a remainder of 0, push the element at that index to the even array
// If the index of the string cannot be divided by 2 with a remainder of 0, push the element at that index to the odd array
// Return the even array joined as a string and concatenated with the odd array joined as a string concatenated with a space in between
