// (7 kyu) Largest pair sum in array
/* Instructions
 * Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/

// Solution
function largestPairSum(numbers) {
    numbers.sort((a, b) => b - a)
    return numbers[0] + numbers[1]
}

// Explanation
// Use the `.sort((a,b_ => (b - a)` function to change the array to be in descending order
// Return the first element in the array and the 2nd element of the array together to get the largest pair sum
