// (8 kyu) Get Number from String
/* Instructions

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

*/

// Solution
function getNumberFromString(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === '0' || char === '1' || char === '2' || char === '3' || char === '4' ||
            char === '5' || char === '6' || char === '7' || char === '8' || char === '9') {
                arr.push(char)
            }
    }
    return Number(arr.join(''))
}

// Explanation
// Instantiate a new array
// Loop through each character in the string
// If the character in the string is a digit, push it to the array
// Join the array into a string, then turn it into a number using the Number wrapper, and return the value
