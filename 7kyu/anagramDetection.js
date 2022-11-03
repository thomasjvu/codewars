// (7 kyu) Anagram Detection
/* Instructions
 * An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"
*/

// Solution
let isAnagram = (test, original) => {
  original = original.toUpperCase().split('').sort().join('')
  test = test.toUpperCase().split('').sort().join('')
  return (original === test) ? true : false
}

// Explanation
// We can test for an anagram by eliminiating case-sensitivity using the `.toUpperCase()` method, making each string an array so that we can sort it using `.split('')` and `.sort()`
// Then, rejoin into a `.string('')` and then compare the original to the test to see if they are equal. If they are, then it is an anagram, and if not, then false.
