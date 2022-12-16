// (8 kyu) Alternating Case
/* Instructions

altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string. 
 
*/

// Solution
String.prototype.toAlternatingCase = function() {
    let str = ''
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            str += this[i].toLowerCase()
        } else {
            str += this[i].toUpperCase()
        }
    }
    return str
}

// Explanation
// The string prototype is an object, so to refer to its "parameters", use the `this` keyword.
// Declare an empty string for our new string
// Loop through each element of `this` string
// If the element of the this string is equal to its uppercase equivalent, then concatenate the lowercase equivalent to the string
// Otherwise, concatenate the uppercase equivalent onto the string
// Return the string

