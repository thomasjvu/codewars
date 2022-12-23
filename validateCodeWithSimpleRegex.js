// (8 kyu) Validate code with simple regex
/* Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
*/



// Solution
function validateCode (code) {
    codeArr = String(code).split('')
}

// Explanation
// Wrap the code argument using the String constructor to turn it into a string object
// Check if the first element (0th index) of the string is equal to either 1, 2, or 3 (value only)
// Use a ternary operator and if it is, return true, otherwise return false.
