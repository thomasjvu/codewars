// (6 kyu) Count characters in your string
/* Instructions
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    What if the string is empty? Then the result should be empty object literal, {}.
*/

// Solution
function count (string) {
    let obj = {}
    if (string.length === 0) {
        return obj
    } else {
        for (const char of string) {
            if (obj.hasOwnProperty(char)) {
                obj[char] += 1
            }
            else {
                obj[char] = 1
            }
        }
    }
    return obj
}

// Explanation
// Instantiate a new object
// If the length of the string is 0, return the empty object
// Else...
// Loop through each character in the string using a for..of loop
// Check if the object contains the iteration as a property, and if it does, add one to it, and if it doesn't, create it and set it equal to 1
// When the loop ends, return the filled out object
