// (7 kyu) Incrementer
/* Instructions
 * Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
Notes:

    return an empty array if your array is empty
    arrays will only contain numbers so don't worry about checking that

Examples:

[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
*/

// Solution
const incrementer = nums => {
    const increments = nums.map((element, index) => element + (index + 1))
    const incStrings = increments.map(element => String(element))
    const final = []

    for (let i = 0; i < incStrings.length; i++) {
        if (incStrings[i].length > 1) {
            final.push(Number(incStrings[i][1]))
        } else {
            final.push(Number(incStrings[i]))
        }
    }

    return final
}

// Explanation
// Initialize an array, increments, that is mapped from the given nums array where each element becomes the element + the index + 1 
// Initialize an array, incStrings, that is mapped from the increments array, but each number element becomes it's string equivalent
// Initialize an empty array, final, to hold the final incremented array
// Use a for..loop to iterate through each element in the incStrings array
// If the element has a length that is greater than 1, that means it has more than 1 digit, so push the second digit of that string as a number
// Else, push the element as a number
// After all is said and done, return the final array that has been filled out
