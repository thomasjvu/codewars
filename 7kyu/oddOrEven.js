// (7 kyu) Odd or Even?
// Instructions
/* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

// Solution
function oddOrEven(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i]
    } return (sum % 2 === 0) ? "even" : "odd"
}

// Another Solution
function oddOrEven(array) {
    return ( array.reduce((acc, curr) => acc + curr, 0) % 2 === 0) ? "even" : "odd"
}

// Explanation
// Get the sum of each element in the array either by using a for loop or using the reduce() method.
// From there, use modulus to see if the sum is divisible by 2, and if it is, the sum is an even number, else odd.
