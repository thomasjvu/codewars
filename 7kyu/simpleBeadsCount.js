// (7 kyu) Simple beads count
/* Instructions
 * Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

// Solution
// function countRedBeads(n) {
//     if (n < 2) {
//         return 0
//     } else {
//         return 2 * n - 2
//     }
// }

// ES6 Syntax
const countRedBeads = n => (n < 2) ? 0 : (2 * n) - 2

// Explanation
// Use an if..else condition to check if the number of blue beads is less than 2. If it is, return 0.
// If it is not less than 2, then multiply the number of beads by 2 and then subtract 2
