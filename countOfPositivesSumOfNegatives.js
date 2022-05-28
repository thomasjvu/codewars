// (8 kyu) Count of positives / sum of negatives
/* Instructions
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */

// Solution
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return []
    }
    let sum = 0
    let count = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            sum += input[i]
        } else if (input[i] > 0) {
            count ++
        }   
    } return [count, sum]
}

// Explanation
// First, check if the input is null or 0, and if it is, return an empty array
// If not, then continue on and instantiate sum and count
// Loop through each element in the array, and if it is less than 0, add the input to the sum variable
// If it greater than 0, add 1 to the count variable
