// (7 kyu) L2: Triple X
/* Instructions
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false

Note :

    capital X's do not count as an occurrence of "x".
    if there are no "x"'s then return false

*/

// Solution
function tripleX(str) {
    let firstX = str.indexOf('x')
    return (str[firstX+ 1] === 'x' && str[firstX + 2] === 'x')
}

// Explanation
// Set the firstX variable equal to the index of the first occurence of 'x' using the .indexOf string method.
// Return true or false depending on if both characters after firstX are also 'x'.
