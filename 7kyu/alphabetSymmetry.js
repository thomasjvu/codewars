// (7 kyu) Alphabet Symmetry
/* Instructions
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

If you like this Kata, please try:

Last digit symmetry

Alternate capitalization

*/

// Solution

function solve(arr) {

    // instantiate array to hold counts of symmetric letters
    let symmetric = []

    // loop through given array
    for (let i = 0; i < arr.length; i++) {
        // declare word to be the array element's lowercase value
        let word = arr[i].toLowerCase()
        // declare count variable and set it equal to 0
        let count = 0

        // loop through the letters of the word at the current loop
        for (let j = 0; j < word.length; j++) {
            // character code for lowercase letters start at 97, so check if the character is equal to its character code
            if (word.charCodeAt(j) === j+97) {
                // if it does, increment count
                count++
            }
        }
        // at the end of the loop for that word, push the count to the symmetric array
        symmetric.push(count)
    }

    // return the symmetric array
    return symmetric
}
