// (8 kyu) Grasshopper - Summation
/* Instructions
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

    For example:

    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/  

// Solution
function summation(num) {
    let total = 0
    for (let i = 0; i <= num; i++) {
        total += i
    } return total
}

// Refactored
summation = num => {
    let total = 0
    for (let i = 0; i <= num; i++) {
        total += i
    } return total
}

// Explanation
// The summation is the total sum of all numbers leading up to our argument combined
// So, we can use a for loop that adds each element up to the argument, starting at 0, and ending at the given number
// Then, we can return that value total as our summation
