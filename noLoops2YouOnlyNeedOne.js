// (8 kyu) No Loops 2 - You Only Need One
/* Instructions
 * *** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

No Loops 1 - Small enough?
*/

// Solution
function check (a, x) {
    return a.includes(x)
}

// Refactored
const check = (a, x) => a.includes(x)

// Explanation
// Use the `.includes()` method to check whether an array or a string contains a given parameter.
