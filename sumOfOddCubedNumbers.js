// (7 kyu) Sum of Odd Cubed Numbers
/* Instructions
 * Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
 */

// Solution
const cubeOdd = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return undefined
        }
    }

    return arr.map(el => el ** 3).filter(el => el % 2 !== 0).reduce((a,b) => a+b, 0)
}

// Explanation
// First, loop through the array and check if the typeof any element is not a number, and if so, return undefined
// Or else, map the array so that each element is cubed, then filter the array for odd numbers using modulus, and then use the reduce function to get the final sum
