// (7 kyu) Categorize New Member
/* Instructions
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// Solution
for openOrSenior(data){
    let newArr = []
    for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
        newArr.push("Senior")
    } else {
        newArr.push("Open")
    }
    return newArr
}

// Explanation
// Create a new array that holds all of the other array items
// Loop through each element in the array (which contains arrays)
// Then, use a conditional to check if the first element in the nested array is greater than or equal to 55, and if th esecond element is greater than 7. If it is, then we can push "Senior" to the end of the new array. Otherwise, push "Open" to the end of the array.
// Thus, the new array should contain a list of prospetive member placements.
