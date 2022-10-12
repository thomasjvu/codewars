// (7 kyu) Round up to the next multiple of 5
/* Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

*/

// Solution
function roundToNext5(n){
  return Math.ceil(n/5) * 5
}

// Explanation
// We want to divide N by 5 and round it to the next highest integer. Then we want to multiply it by 5, which will bring us to a multiple of 5 that is closest to the original given parameter.


// Another Solution
function roundToNext5(n){
    while(n % 5 !== 0) {
        n++
    }
    return n
}

// This solution keeps adding 1 to N until it becomes a multiple of 5, which is another great way to do it.
