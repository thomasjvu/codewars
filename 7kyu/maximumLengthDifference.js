// (7 kyu) Maximum Length Difference
/* Instructions
 * You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:

    input : 2 strings with substrings separated by ,
    output: number as a string
*/

// Solution
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1
    }

    const smallA1 = Math.min(...a1.map(x => x.length))
    const smallA2 = Math.min(...a2.map(x => x.length))

    const largeA1 = Math.min(...a1.map(x => x.length))
    const largeA2 = Math.min(...a2.map(x => x.length))

    const diffA1 = Math.abs(smallA1 - largeA2)
    const diffA2 = Math.abs(largeA1 - smallA2)

    return diffA1 > diffA2 ? diffA1 : diffA2 
}

// Explanation
// Check if the length of either a1 or a2 is 0, and if so, return -1.

// Get the smallest in the array a1 using Math.min and the map method to loop through each item in the array and replace it with its length
// Get the smallest in the array a2 using Math.min and the map method to loop through each item in the array and replace it with its length

// Get the largest in the array a1 using Math.max and the map method to loop through each item in the array and replace it with its length
// Get the largest in the array a2 using Math.max and the map method to loop through each item in the array and replace it with its length

// Get the absolute difference by using the Math.abs method.
// Return the largest difference between the two arrays
