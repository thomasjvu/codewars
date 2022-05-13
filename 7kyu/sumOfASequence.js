// (7 kyu) Sum of a sequence
/* Instructions
 * Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

This is the first kata in the series:

    Sum of a sequence (this kata)
    Sum of a Sequence [Hard-Core Version]

*/

// Solution
const sequenceSum = (begin, end, step) => {
    let sum = 0
    if (begin > end) {
        return sum
    } else {
        for (i = begin; i < end; i= i+step) {
            sum += i
        }
    }
    return sum
}


// Explanation
// Instantiate a new variable, sum, at 0 which will hold our sequence sum
// If begin is greater than end, we return the sum immediately which is alrealready set to 0
// Do a for loop from the beginning to end, and add i (using step as our incrementor) to the sum for each step iteration in the loop
// Return the total sum after going through the loop
