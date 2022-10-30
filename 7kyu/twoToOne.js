// (7 kyu) Two to One
// Instrucions
/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// Solution
function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
}

// Explanation
// We can get an array of all of the unqiue values in the array using the spread operator with the Set() object.
// Then, use the .sort() method to sort the unique array elements in alphabetical order
// Finally, use the .join('') method to put all of those items into a string.
