// (8 kyu) Find out whether the shape is a cube
/* Instructions
 * To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers
*/

// Solution
const cubeChecker = (volume, side) => {
    if (volume <= 0 || side <= 0) {
        return false
    }
    return (side ** 3 === volume) ? true : false
}

// Explanation
// If the volume or side is less than or equal to 0, it must not be a cube so return false for that edge case
// Then, check if the cubed value of side (to the power of 3) is equal to the volume. If it is, then return true, otherwise return false

