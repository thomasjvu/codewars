// (7 kyu) Vapor Code
/* Instructions
 * ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.
Examples

"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

// Solution

const vaporcode = string => {

    let upper = string.toUpperCase()
    let arr = upper.split('')
    let vapor = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            vapor.push(arr[i])
        }
    }

    return vapor.join('  ')

}

// Explanation
// Initialize a new string, upper, which is equal to string.toUpperCase()
// Initialize a new array, arr, which is equal to the .split('') of the upper string
// Initialize an empty array, vapor.
// Loop through the arr array and push any element that isn't an empty space to the vapor array.
// Return the vapor array joined together as a string with 2 spaces between each element.
