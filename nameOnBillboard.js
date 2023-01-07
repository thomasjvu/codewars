// (8 kyu) Name on Billboard
/* Instructions
 * You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/

// Solution
function billboard(name, price = 30) {
    let sum = 0
    for (let i = 0; i < name.length; i++) {
        sum += price
    }
    return sum
}

// Explanation
// Instead of using the multiplication operator, we can use a for..loop
// Initialize a number variable, sum, and set it equal to 0
// Loop through each character in the name argument
// For each iteration, add the price to the sum
// At the end of the loop, return the sum
