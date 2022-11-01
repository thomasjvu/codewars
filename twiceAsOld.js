// (8 kyu) Twice as old
/* Instructions
Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

// Solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld)
}

// Refactored
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs((sonYearsOld * 2) - dadYearsOld)

// Explanation
// Multiply the son's age by two, and subtract the dad's age to get the difference
// Find the absolute value to be sure that the answer is always greater or equal to 0 using the Math.abs() function
