// (7 kyu) Power of two
/* Instructions
 * Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

*/

// Solution
function isPowerOfTwo(n) {
    let i = 1

    while (i < n) {
        i *= 2
    }

    return i === n
}

// Explanation
// Start with i = 1, because we know that 2^0 = 1 which is a valid power of two
// Loop through each valid power of two by multiplying i by 2 until it reaches the value of n
// if i is eventually the same value as n, that means n will be a valid power of two and the return statement will show true, otherwise false

