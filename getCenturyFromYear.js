// (8 kyu) Century From Year
/* Instructions
 * Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/

// Solution
function century(year) {
    return Math.ceil(year / 100)
}

// Refactored
const century = year => Math.ceil(year/100)

// Explanation
// Math.ceil is necessary to round up to the next century if the given year is not perfectly divisible by 100 
