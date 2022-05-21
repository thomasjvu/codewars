// (8 kyu) Area of a Square
/* Instructions
 * Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

// Solution
function squareArea(A){
    return (2 * A / Math.PI) ** 2
}

// Refactored
const squareArea = a => (2 * a / Math.PI) ** 2

