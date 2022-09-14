// (7 kyu) Reverse words
/* Instructions
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// Solution
function reverseWords(str) {
    let rev = str.split(' ').map(element => element.split('').reverse().join(''))
    return rev.join(' ')
}

// Explanation
// Create a new variable (rev) that will hold our new string of reversed words 
// Whenever I think about reversing a string, I think about splitting it into an array.
// Use the str.split(' ') method to split each word in the string, because words will be separated by a single space.
// Then, use the .map() array method to take each element in the array, and split it by character, then reversing the characters in that word using the .reverse() method.
// Then, use the .join() array method to join those character arrays back into word arrays.
// Finally, join the word arrays  together again by spaces (' ') to join each word to be a single string separated by spaces.
