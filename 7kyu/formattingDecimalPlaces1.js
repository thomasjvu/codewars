// (7 kyu) Formatting Decimal Places #1
/* Instructions
Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Don't round the numbers! Just cut them after two decimal places!

Right examples:  
32.8493 is 32.84  
14.3286 is 14.32

Incorrect examples (e.g. if you round the numbers):  
32.8493 is 32.85  
14.3286 is 14.33

*/

// Solution
function twoDecimalPlaces(number) {
    number = String(number).split('.') // separate left and right of decimal place
    return Number(number[0] + '.' + number[1].slice(0, 2)) // return the left side with a decimal place with the first 2 chars of the left side as a number
}
