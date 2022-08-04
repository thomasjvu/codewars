// (7 kyu) You're a square!
/* Instructions
 * A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/

// Solution
let isSquare = n => (Math.sqrt(n) % 1 === 0)

// Explanation
// Use arrow functions to simplify the problem and provide an implicit return
// If the square root of N can be perfectly divided by 1, that means the number is a perfect square.
// If the square root has decimals, it won't be perfectly divisible by 1, so it is not a perfect square.
