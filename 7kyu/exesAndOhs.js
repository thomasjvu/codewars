// (7 kyu) Exes and Ohs
/* Instructions
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// Solution
funtion XO(str) {
    let exes = 0
    let ohs = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === 'X') {
            exes += 1
        } else if (str[i].toUpperCase() === '0') {
            ohs += 1
        }
    } return (exes === ohs) ? true : false
}

// Explanation
// Simply, we create 2 separate variables that we can compare to see if they have the same value
// Loop through the string starting at index 0 for the loop counter until the end of the string
// use .toUpperCase() method on the index to make sure we can eliminate case sensitivity
// if the index value is equal to 'X', add it to the exes variable, and if equal to 'O', add it to the ohs variable
// then, use a ternary operator to check if these values are the same
