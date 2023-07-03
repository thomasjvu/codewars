// (7 kyu) Check three and two
/* Instructions

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
Examples

["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

*/

// Solution
function checkThreeAndTwo(array) {
    // init map object
    let map = {};

    // loop through array and fill out hashmap
    for (const char of array) {
        map[char] = map[char] + 1 || 1;
    }

    // init variables for two and three same values
    let twoVal;
    let threeVal;

    // loop through each key in map
    for (const key in map) {
        // if there is three of same values, set that to threeVal
        if (map[key] === 3) {
            threeVal = map[key];
        // if there is two of same values, set that to twoVal
        } else if (map[key] === 2) {
            twoVal = map[key];
        }
    }

    // if both twoVal and threeVal are not undefined, then return true, otherwise false
    return (twoVal !== undefined && threeVal !== undefined) ? true : false;
}
