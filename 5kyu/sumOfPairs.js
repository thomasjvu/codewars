// (5 kyu) Sum of Pairs
/* Instructions
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

// Brute Force Solution (Doesn't work for excruciatingly long tests)
// function sumPairs(ints, s) {
//     // get all possible solutions
//     let solutions = [];

//     for (let i = 0; i < ints.length; i++) {
//         for (let j = 0; j < ints.length; j++) {
//             if (ints[i] + ints[j] === s && i < j) {
//                 solutions.push([ints[i], ints[j], i, j]); // [first num, second num, first idx, second idx]
//                 solutions.sort((a, b) => a[3] - b[3]);
//             }
//         }
//     }

//     if (solutions.length != 0) {
//         return solutions[0].slice(0, 2);
//     } else {
//         return undefined;
//     }
// }

// Optimized Solution
function sumPairs(ints, s) {
    let seen = new Set()

    for (let i = 0; i < ints.length; i++) {
        let target = s - ints[i]

        if (seen.has(target)) {
            return [target, ints[i]]
        }

        seen.add(ints[i])
    }

    return undefined
}

// Explanation
// This solution iterates over the array `ints` only once.
// For each element, we calculate the target value that would add up to `s` with the current element
// If the target value has been seen before (stored in the `seen` set), we found a pair that adds up to `s` and we return it
// Otherwise, we add the current element to the `seen` set.
