// (6 kyu) Duplicate Encoder
/* Instructions
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// Solution

const duplicateEncode = word => {
    word = word.toUpperCase()
    let map = {}
    let arr = []

    for(char of word) {
        map[char] = map[char] + 1 || 1
    }

    for(char of word) {
        if (map[char] === 1) {
            arr.push('(')
        } else if (map[char] >= 1) {
            arr.push(')')
        }
    }

    return arr.join('')

}

// Explanation
// Change the word to it's uppercase equivalent because we aren't looking for case sensitivity
// Instantiate an empty map object and an empty array object
// Loop through each character in the word, and if it exists in the map, add 1 to it, and if it doesn't, add it to the map and set it equal to 1
// Loop through each character in the word again, and if the character property in the map is equal to 1, push the left parantheses, or else push the right parentheses onto the array
// Return the joined array to get the duplicate encoder string
