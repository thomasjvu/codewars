// (8 kyu) Find the smalelst integer in the array
/* Instructions
 * Given an array of integers your solution should find the smallest integer.

    For example:

        Given [34, 15, 88, 2] your solution will return 2
        Given [34, -345, -1, 100] your solution will return -345

    You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// Solution
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args = args.sort((a,b) => a - b)
    return args[0]
  }
}

// Explanation
// Sort the array in ascending order by using the `.sort((a,b) => a - b)`
// Then, return the first element in the array (0th index)
