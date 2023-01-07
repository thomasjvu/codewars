// (7 kyu) Simple Consecutive Pairs
/* Instructions
 * In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/

// Solution
function pairs(ar) {
    let count = 0

    let i = 0
    let j = 1

    while (j < ar.length) {
        if ( ar[j] === ar[i] + 1 || ar[j] === ar[i] - 1 ) {
            count++
        }
            i+=2
            j+=2
    }

    return count
}

// Explanation
// Instantiate a count variable set equal to 0
// Instantiate an index (i) set equal to 0 for the left-side pair
// Instantiate an index (j) set equal to 1 for the right-side pair
// Loop through each element in ar.length while the j index is up to the last element
// If the element at index j is equal to either the element at index i - 1 or +1, it is consecutive, so add 1 to the count
// For each loop, add 2 to i and 2 to j to get the next pair
// At the end of all the loops, return the filled out count variable
