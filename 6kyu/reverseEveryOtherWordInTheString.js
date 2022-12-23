// (6 kyu) Reverse every other word in the string
/* Instructions
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

// Solution

const reverse = str => {

    let newStr = str.trim()
    let arr = newStr.split(' ')
    let newArr = []

    if (newStr.length === 0) {
        return ''
    }

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push( arr[i].split('').reverse().join('') )
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr.join(' ')
}

// Explanation
// Declare a new string variable (newStr) and set it equal to the given string argument with all of the whitespace trimmed out using the .trim() method
// Declare a new array (arr) that takes the newStr and splits it between spaces using the .split(' ') method
// Declare another new array (newArr) that is set to an empty array
// If the length of the newStr variable is 0, immediately return an empty string
// If not, loop through each element in the array variable and use a conditional to check if the index is even or odd
// If the index is odd, reverse that string by using the .split('').reverse().join('') method and push it into the newArr
// Or else, push the regular string into the newArr
// Return the elements of the newArr joined together as a string with a space between each element using the .join(' ') method
