// (8 kyu) I love you, a little, a lot, passionately ... not at all
/* Instructions
 * Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

*/

// Solution
const howMuchILoveYou = nbPetals => {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    for (let i = 0; i < nbPetals; i++) {
        arr.push(arr[i])
    }
    return arr[arr.length-1]
}

// Explanation
// Create an array of all the possibilities
// Loop through 0 up until the number of Petals, for each iteration, add the corresponding array element by matching with the index.
// Return the last element in the array
