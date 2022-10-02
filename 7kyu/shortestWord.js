// (7 kyu) Shortest Word
/* Instructions
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types. 
 */

// Solution
function findShort(s){
    return s.split(' ').sort((a, b) => b.length - a.length).pop().length
}

/* Explanation 
 * To find the shortest word in a string of words, we must first `.split()` the string into an array.
 * Then, we can sort the array by length in descending order using the `.sort((a,b) => b.length - a.length)` method
 * Because we want the word with the shortest length, we can use the `.pop()` method to get the smallest word
 * Finally, we get the length of the popped value by using the `.length` method. 

