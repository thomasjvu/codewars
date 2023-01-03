// (7 kyu) Disarium Number (Special Numbers Series #3)
/* Instructions
 * Definition

Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task

Given a number, Find if it is Disarium or not .
*/

// Solution
function disariumNumber(n) {
    let arr = []
    let str = String(n)

    for (let i = 0; i < str.length; i++) {
        arr.push( Number(str[i]) ** (i + 1) )
    }

    let sum = arr.reduce((acc, curr) => acc + curr, 0)

    return (sum === n) ? "Disarium !!" : "Not !!"
}

// Explanation
// Instantiate a variable arr, that is an empty array
// Instantiate a variable str, that is the value of n as a string
// Loop through each element in the string
// Push the string element as a Number to the power of the index + 1 to satisfy the Disarium condition
// Instantiate a variable sum, that is the array reduced to a single number
// If the sum is equal to n, return 'Disarium !!', or else, return 'Not !!'
