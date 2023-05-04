// (7 kyu) Find Count of Most Frequent Item in an Array
/* Instructions
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 

The most frequent number in the array is -1 and it occurs 5 times.

*/

// Solution
function mostFrequentItemCount(collection) {
    // edgecase; check for empty array
    if (collection.length === 0) return 0;

    // set frequency to lowest possible
    let frequency = 0;

    // instantiate hashmap
    const map = {};

    // fill in property-value of hash map with array item and frequency
    for (const item of collection) {
        map[item] = map[item] + 1 || 1;
    }

    // loop through each property in the map
    for (const key in map) {
        // if property value is greater than current frequency, set frequency to property value
        if (map[key] > frequency) {
            frequency = map[key];
        }
    }

    // return the count of most frequent item in array
    return frequency;
}
