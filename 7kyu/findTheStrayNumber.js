// (7 kyu) Find the Stray Number
/* Instructions
 * You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// Solution
function stray(numbers) {
    numbers = numbers.sort((a,b) => a-b)
    if (numbers[0] !== numbers[1]) {
        return numbers[0]
    } else {
        return numbers.pop()
    }
}

/* Explanation
 * The first step is to set our numbers array equal to a sorted array (ascending) using the `.sort()` method for arrays.
 * Then, we check if the first two numbers are equal. If they are not, then the first number must be the odd one out.
 * If the two numbers are equal, then the last number must be the odd one out.

