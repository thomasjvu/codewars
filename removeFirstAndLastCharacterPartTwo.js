// (8 kyu) Remove First and Last Character Part Two
/* Instructions
 * This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/

// Solution
function array(str){
  if (arr.length <= 3) {
    return null
  } else {
    let newArr = str.split(',')
    newArr.pop()
    newArr.shift()
    return newArr.join(' ')
  }
}

// Explanation
// First, use an if statement to check if the length of the given argument is less than 3 by checking the argument's .length property.
// If it is less than 3, return null
// If it is not less than 3, split the given string by using a comma delimiter which will give us an array element that separates each element at the comma as the separation point
// Use the array .pop() method to remove the last element
// Use the array .shift() method to remove the first element
// Finally, return a the array that is joined back into a string with a space in between each element using the .join(' ') method
