// (7 kyu) Count all the sheep on farm in the heights of New Zealand
/* Instructions
Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

Good luck! :-)

*/

// Solution
function lostSheep(friday,saturday,total){
  const friCnt = friday.reduce((a,b) => a + b, 0)
  const satCnt = saturday.reduce((a, b) => a + b, 0)
  return total - friCnt - satCnt
}

// Explanation
// Use the array .reduce() method to sum the values of the Friday and Saturday arrays
// Subtract those daily totals by the Sheep total to get the total of missing sheep
