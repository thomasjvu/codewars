// (8 kyu) Regex count lowercase letters
/* Instructions
Your task is simply to count the total number of lowercase letters in a string.
Examples

lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

// Solution
const lowercaseCount = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
        count++
    }
    }
    return count
}

// Explanation
// Instantiate a new number variable to hold the count
// Loop through every character in the string
// If the value at each index is not equal to its uppercase equivalent, it must be lowercase, so increment the count value by 1
// Return the count
