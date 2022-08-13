// (7 kyu) Simple Fun #176: Reverse Letter 
// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string



/* Solution */
function reverseLetter(str) {
  return str.split('').reverse().join('').replace(/[^a-z]/ig, '') // carat symbol in brackets means "not ____"
}

// Refactored
const reverseLetter = str => str.split('').reverse().join('').replace(/[^a-z]/ig, '')

// Another solution
function reverseLetter(str) {
  return str.match(/[abcdefghijklmnopqrstuvwxyz]/ig, '').reverse().join('')  
}


// Explanation
// The string `.match()` method takes the matching conditions of the string and outputs the elements into an array. 
// We can then use the array `.reverse()` method to reverse the array.
// Then, we can join the string back together using the array `.join('')` method
