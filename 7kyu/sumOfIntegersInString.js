// (7 kyu) Sum of Integers in String
/* Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/

// Solution
function sumOfIntegersInString(s) {

    // set breakpoint equal to regex for obtaining everything that is not a number
    let breakpoint = /[^0-9]+/

    // split string into array by spacing out things by making breakpoint the delimiter
    s = s.split(breakpoint)

    // we will left with an array of nums in string format, which we reduce to get the sum
    return s.reduce((a, b) => Number(a) + Number(b), 0)
}

// Regex: 
// `/ /` indicates a regular expression
// `[^]` is a negated character class that matches any character that is not in the set of characters enclosed in the brackets
// `0-9` matches any digit from 0 to 9
// `+` matches one or more occurences of the preceding character / group.
