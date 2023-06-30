// (7 kyu) Longest Vowel Chain
/* Instructions
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon

*/

// Solution
function solve(s) {

    let chain = 0 // initialize chain

    let regex = /[^aeiou]/ig // define regex to check everything that isn't a vowel

    s = s.split(regex) // split string into array parts delimiting by anything that isn't a vowel

    // loop through array
    for (let i = 0; i < s.length; i++) {
        // if the length of the array element is greater than current chain, that is now the longest consecutive vowel chain length
        if (s[i].length > chain) {
            chain = s[i].length
        }
    }

    // return longest chain length
    return chain
}
