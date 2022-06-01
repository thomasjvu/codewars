// (8 kyu) Area or Perimeter
/* Instructions
 * You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

// Solution
const areaOrPerimeter = function(l, w) {
    return (l === w) ? l * w : 2 * l + 2 * w
}

// Refactored
const areaOrPerimeter = (l, w) => (l === w) ? l * w : (2 * l) + (2 * w)

// Explanation
// a square has all sides the same, so if length and width are the same, multiply together to get the area... 
// otherwise, ti is a rectangle, in which to find the perimeter we should do 2 * length + 2 * width
