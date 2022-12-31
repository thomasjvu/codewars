// (7 kyu) Filter the Number
/* Instructions
Filter the number

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

// Solution
const filterString = value => +value.split('').filter(element => !isNaN(element)).join('')

// Explanation
// Use the string .split('') method to split the given string value as an array of elements
// Use the array .filter() method to go through each element in the array and only return those whose values are a number using the !isNaN() function 
// Join the remaning elements together
// Use the + operand at the beginning of the function to make sure that the returned value is a number data type
