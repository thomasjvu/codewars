// (7 kyu) Love vs Friendship
/* Instructions
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/

// Solution
function wordsToMarks(string) {
    let strength = 0
    for (let i = 0; i < string.length; i++) {
        strength += string[i].charCodeAt() - 96
    }
    return strength
}

// Explanation
// Instantiate a number variable starting at 0
// Loop through each element in the string using a for loop
// Calculate its power value using the `.charCodeAt()` method, where 'a' will give you 97, so add the returned value to the strength variable and subtract each iteration by 96
// Return the strength variable
