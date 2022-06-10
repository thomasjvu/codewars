// (8 kyu) Fake Binary
/* Instructions
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

    Note: input will never be an empty string
*/

// Solution
function fakeBin(x) {
    let fakeBinary = []
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) < 5) {
            fakeBinary.push(0)
        } else {
            fakeBinary.push(1)
        }
    }
    return fakeBinary.join('')
}

// Solution (regex)
function fakeBin(x){
    return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}

// Explanation
// Use a for loop to iterate through each index of the string. Use the Number wrapper to compare the numeric value to either be less than 5 or else 5+
// If it is less than 5, we push 0 into the fakeBinary array, and finally we join the fakeBinary array into a string using the .join('') method
