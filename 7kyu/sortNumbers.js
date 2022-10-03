// (7 kyu) Sort Numbers
/* Instructions
 * Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// Solution
function solution(nums) {
    return (nums === null) ? [] : nums.sort((a,b) => a-b)
}

/* Explanation
 * This is a conditional problem. If the `nums` parameter is null or an empty array, we return an empty array.
 * Otherwise, use the array `.sort((a,b) => a-b)` method to sort the array from low to high (ascending) order.
