// (8 kyu) Take an Arrow to the knee, Functionally
// Instructions
/*
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details

You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
Examples

These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

// Solution
const ArrowFunc = arr => arr.map(element => String.fromCharCode(element)).join('')

// Explanation
// Arrow functions can be used to give an implicit return
// The map method enables us to take each element from an array and do something with it, in this case get the CharCode

