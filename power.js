// (8 kyu) Power
/* Instructions
 * The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
Examples

numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000

Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/

// Solution
function numberToPower(number, power) {
    let x = 1
    for (let i = 1; i <= power; i++) {
        x *= number
    }

    return x
}

// Explanation
// Instantiate a new variable set equal to 1, which will hold our final number
// Loop through each number from 1 to the given power
// For each iteration, reassign x to be x multiplied by the number
// At the end of all the loops, return x which will hold the final result
