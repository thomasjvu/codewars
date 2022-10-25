// (7 kyu) Sum of Minimums
/* Instructions
 * Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)

*/

/* Solution */
function sumOfMinimums(arr) {
    return arr.reduce((acc, curr) => acc + Math.min(...curr), 0)
}

/* Explanation:
 * When we want to get the sum of an array as a single value, we should use the reduce method.
 * The reduce method takes the accumulator and current number, and adds it together for each element in the array.
 * In this case, because we want to add only the minimums, we should use the Math.min function on the current val.
 * Using the spread operator (...) will enable us to grab the minimum of each nested array.
