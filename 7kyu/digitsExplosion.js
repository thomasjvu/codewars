// (7 kyu) Digits Explosion
/* Instructions
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

explode("312")

should return :

"333122"

explode("102269")

should return :

"12222666666999999999"

*/

// Solution
function explode(s) {
    // instantiate empty string
    let explosion = ''

    // loop through each element of the string
    for (let i = 0; i < s.length; i++) {
        // concatenate each element repeated by that element's numerical value
        explosion += s[i].repeat(Number(s[i]))
    }

    // return filled out explosion string
    return explosion
}

