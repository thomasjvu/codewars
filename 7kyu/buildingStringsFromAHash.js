// (7 kyu) Building Strings From a Hash
/* Instructions
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

*/

// Solution
function solution (pairs) {

    let answer = [] 

    for (const key in pairs) {
        answer.push(`${key} = ${pairs[key]}`)
    }

    return answer.join(',')
}

// Explanation
// Initialize an empty array variable named answer
// Loop through each item in the pairs object
// For each iteration, push a string that states the object key at that iteration is equal to the value
// Return the answer array joined by a string, with a comma separating each newly joined element.
