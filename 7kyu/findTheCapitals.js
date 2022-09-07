// (7 kyu) Find the capitals
/* Instructions
 * Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// Solution
const capitals = word => {
    let capitalArr = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            capitalArr.push(i)
        }
    } return capitalArr
}

// Explanation
// Instantiate a new array within the function that will hold each index of capital letters
// Use a for loop to check if each index in the word is equal to its uppercase equivalent
// If it is, then push that index onto the end of the new array of capitals
// Finally, return the capital array.
