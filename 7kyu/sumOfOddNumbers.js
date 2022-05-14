// (7 kyu) Sum off odd numbers
/* Instructions
 * Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

// Solution

function rowSumOddNumbers(n) {
    return n ** 3
}

// Explanation
// 1 ** 3 = 1
// 2 ** 3 = 8
// 3 ** 3 = 27
// Math.pow(n, 3) will be the same as summing the each row consecutive of odd #s
