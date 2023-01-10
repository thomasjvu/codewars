// (6 kyu) Dashatize It
/* Instructions
 * Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

// Solution
function dashatize(n) {
    if (n !== Math.floor(n)) return "NaN"

    let str = n.toString()
    let result = str[0] % 2 == 0 ? str[0] : "-" + str[0] + "-"

    for (let i = 1; i < str.length; i++) {
        if (str[i] % 2 == 0) {
            result += str[i]
        } else {
            result += "-" + str[i] + "-"
        }
    }

    while (result.indexOf("--") > -1) {
        result = result.replace('--', '-')
    }
    if(result[result.length-1] == '-') result = result.slice(0, -1)
    if(result[0] == '-') result = result.slice(1)

    return result

}

// Check if n is not an integer, and if not, return "NaN"
// Convert n to a string
// Create a variable to hold the result and handle the first digit
// Iterate through the rest of the digits in the string after index 0
// If the digit is even, concatenate it to the result string
// If the digit is odd, add "-" before and after the digit
// While there are "--" in the result string, replace them with a single "-"
// Check if the last element is "-" and if it is, remove it using .slice(0, -1)
// Check if the first element is '-", and if it is, remove it using .slice(1)
// Finally, return the result
