// (7 kyu) Nice Array
/* Instructions
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

*/

// Solution
function isNice(arr) {

    if (arr.length <= 1) return false // if only 1 or less element, cannot be nice array

    // loop through array and check if the array doesn't include both n - 1 and n + 1 possibilities
    for (let i = 0; i < arr.length; i++) {
        // if so, return false
        if (!arr.includes(arr[i] - 1) && !arr.includes(arr[i] + 1)) {
            return false
        }
    }

    // return true if false was never returned, meaning it is a nice array
    return true
}
