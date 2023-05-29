// (6 kyu) Equal Sides of An Array
/* Instructions
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

*/

// Brute Force (Doesn't Work for Large Inputs)
// function findEvenIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let left = arr.slice(0, i) // left slice is inclusive of index val
//         let right = arr.slice(i + 1, arr.length) // right slice is after index val

//         let leftVal = left.reduce((acc, curr) => acc + curr, 0) // get sum of left
//         let rightVal = right.reduce((acc, curr) => acc + curr, 0) // get sum of right

//         if (leftVal === rightVal) return i // if left and right values are the same, return index
//     }

//     return -1 // otherwise, return -1
// }

// Solution: O(n)
function findEvenIndex(arr) {
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0)
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const rightSum = totalSum - leftSum - arr[i]

        if (leftSum === rightSum) {
            return i
        }

    leftSum += arr[i]

    }

    return -1

}

// Explanation
// Calculate the total sum of all elements in the array only once using .reduce()
// Then, iterate through the array while keeping track of the left sum and calculating the right sum on the fly
// By subtracting the current element and the left sum from the total sum, we can obtain the right sum without performing an additional `reduce` operation on the right part of the array
// This turns the brute force solution O(n^2) to a Linear solution O(n), where n is the size of the array
