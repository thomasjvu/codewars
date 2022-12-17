// (6 kyu) Highest Rank Number In An Array
/* Instructions
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// Solution
function highestRank(arr) {

    let map = {}

    for (const num of arr) {
        map[num] = map[num] + 1 || 1
    }

    let maxCount = 0
    let maxValue = 0

    for (key in map) {
        if (map[key] >= maxCount) {
            maxValue = Math.max(key, maxValue)
            maxCount = Math.max(map[key], maxCount)
        }
    }

    return maxValue

}


// Explanation
// Create an empty map object, a maxCount variable set equal to 0, and a maxValue variable set equal to 0 
// Loop through each element in the array using a for..of loop
// If the element exists as a property in the map, add 1 to it, otherwise add it and set it equal to 1.
// Loop through each element in the map
// If the value of the key in the map is greater than or equal to the maxCount variable...
// Set the maxValue equal to the maximum value between the key and the current maxValue
// Set the maxCount equal to the maximum value between the key and the current maxcount
// Return the maxValue
