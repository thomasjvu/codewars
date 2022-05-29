// (8 kyu) Remove First and Last Character
/* Instructions
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */

// Solution
function removeChar(str){
    str = str.split('')
    str.pop()
    str.shift()
    return str.join('')
}

// Refactored
function removeChar(str){
    return str.slice(1, str.length -1)
}

// Using .slice('') method, we can remove the first element in the index to the last element in the index
// Using .pop() can remove the last element of a list, and using .shift() can remove the first element in a list.
