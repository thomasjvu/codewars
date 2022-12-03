// (7 kyu) Switcheroo
/* Instructions
 * Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// Solution
function switcheroo(x) {
    let arr = []
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'a') {
            arr.push('b')
        } else if (x[i] === 'b') {
            arr.push('a')
        } else {
            arr.push(x[i])
        }
    }
    return arr.join('')
}

// Explanation
// Instantiate a new empty array variable (arr)
// Loop through each index of the given string argument (x)
// If the element at a given index is 'a', push 'b' to the new array
// Or else, if the element at a given index is 'b', push 'a' to the new array
// Otherwise, push the element at the given index to the new array
// Return the array as a string using the `.join('')` method
