// (8 kyu) For Twins: 1. Types
/* Instructions
Prolog:

This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!
Task:

Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
Examples:

42, "number"   --> true
"42", "number" --> false
*/

// Solution
const typeValidation = (variable, type) => typeof variable === type

// Explanation
// Use the typeof operator, which will return a string indicating the tpe of the operand's (variable) value
// Use the comparision operator === to check if the types are equal
