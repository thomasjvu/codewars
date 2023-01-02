// (8 kyu) Geometry Basics: Distance between points in 2D
/* Instructions
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

// Solution
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y)
}

// Explanation
// Use the Math.hypot method to return the square root of the sum of squares of arguments
