// (7 kyu) Filter Long Words
/* Instructions
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

// Solution
function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(e => e.length > n)
}

// Explanation
// Use the .split(' ') method to split the sentence into an array of words, delimited by the single space
// Use the .filter() method to filter and keep onlly elements whose length is greater than n
// Return that array of words
