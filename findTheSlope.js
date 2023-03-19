// (8 kyu) Find the Slope
/* Instructions
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

*/

// Solution

function slope(points) {
    // Formula for slope is (y2 - y1 / x2 - x1)
    let slope = String( (points[3] - points[1]) / (points[2] - points[0]))

    // Use ternary to account for edge caae of dividing by 0 or -0, and instead return 'undefined', otherwise return slope
    return (slope === '-Infinity' || slope === 'Infinity' || slope === "NaN") ? 'undefined' : slope
}
