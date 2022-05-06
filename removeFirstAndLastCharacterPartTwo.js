// (8 kyu) Remove First and Last Character Part Two
/* Instructions
 * This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/

// Solution
function array(str){
    let newArr = str.split(',')
    newArr.pop()
    newArr.shift()
    let newStr = newArr.join(' ')
    return (newStr === '') ? null : newStr
}

// Explanation
// USe the split method .split(',') to turn the string into an array that removes commas
// Use the array .pop() method to remove the last element
// Use the array .shift() method to remove the first element
// Join the array back into a string with a space in between each element using the .join(' ') method
// If it is a blank string, then return null, otherwise return the new string
