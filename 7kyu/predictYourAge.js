// (7 kyu) Predict your age!
/* Instructions
 * My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.

Example

predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

// Solution
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let result = (age1 ** 2) + (age2 ** 2) + (age3 ** 2) + (age4 ** 2) + (age5 ** 2) + (age6 ** 2) + (age7 ** 2) + (age8 ** 2)
    result = Math.floor(Math.sqrt(result) / 2)
    return result
}

// Explanation
// Use the ** operator to get the exponent of each age
// Use the + operator to add each age (to the power of 2) together
// Use the Math.sqrt() function to get the square root of the total
// Divide the square rooted total by 2
// Use Math.floor() to round the number down to the nearest whole number
// Finally, return the result
