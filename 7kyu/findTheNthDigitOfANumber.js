// (7 kyu) Find the nth Digit of a Number
/* Instructions
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
    If num is negative, ignore its sign and treat it as a positive value
    If nth is not positive, return -1
    Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

Examples(num, nth --> output)
    5673, 4 --> 5
    129, 2 --> 2
    -2825, 3 --> 8
    -456, 4 --> 0
    0, 20 --> 0
    65, 0 --> -1
    24, -8 --> -1
*/

// Solution
const findDigit = (num, nth) => {
    num = Math.abs(num).toString()
    num = num.split('').reverse()
    console.log(num)
    console.log(nth)

    if (nth <= 0) {
        return -1
    } else if (nth > num.length) {
        return 0
    } else {
        return Number(num[nth-1])
    }
}

// Explanation
// Because we don't care about negative values, we should use Math.abs() to turn the num into a positive value
// Then, turn the number into a string so that we can split it into an array and reverse the array
// Use an if..else statement to run through the conditions
// So... if nth is less than or equal to 0 (not positive) then return -1
// else if the length of num is less than nth value, return 0 because it will end up being leading zeros
// else... return the nth value (-1 because array indexes are 0-based) of the num array as a Number
