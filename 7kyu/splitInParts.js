// (7 kyu) Split in Parts
/* Instructions
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive

*/

// Solution
function splitInParts(s, partLength) {

    // create empty array
    let arr = []

    // loop through each element in string
    for (let i = 0; i < s.length; i++) {
        // push the first element normally
        if (i === 0) {
            arr.push(s[i])
        // for every [partlength]th element, push an empty space along with the element
        } else if (i % partLength === 0) {
            arr.push(' ')
            arr.push(s[i])
        // otherwise, push the element normaly
        } else {
            arr.push(s[i])
        }
    }

    // return the array joined as a string
    return arr.join('')
}

// Time Complexity: O(n), Linear Time. Looping through each element in the string is linear.
