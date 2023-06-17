// (5 kyu) Maximum Subarray Sum
/* Instructions
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

// Solution
const maxSequence = (arr) => {

    // initialize maxSum and currentSum variables to 0
    let maxSum = 0
    let currentSum = 0

    // loop through array and reassign maxSum and currentSum
    for (let i = 0; i < arr.length; i++) {
        // currentSum is now the max value between either the current element, or the sum of the current element and currentSum
        currentSum = Math.max(currentSum + arr[i]. arr[i])
        // maxSum is now the max value between either the maxSum and the currentSum
        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
}

// Explanation
// This is known as Kadane's Algorithm, which can solve this problem in O(n) time.
