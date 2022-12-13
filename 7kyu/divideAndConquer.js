// (7 kyu) Divide and Conquer
/* Instructions
 * Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

// Solution
const divCon = x => {

    let strSum = 0
    let numSum = 0

    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number') {
            numSum += x[i]
        } else if (typeof x[i] === 'string') {
            strSum += Number(x[i])
        }
    }

    return numSum - strSum

}

// Explanation
// Instantiate number variables to hold the sum of strings and sum of numbers respectively
// Loop through each element in the array
// Use the typeof operator to check if the element is a number or a string
// For whatever data type it is, add the number value of it to its respective sum variable
// Then return the value of subtracting the strSum from the numSum to get the answer
