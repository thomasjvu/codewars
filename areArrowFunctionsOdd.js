// (8 kyu) Are Arrow Functions Odd?
/* Instructions
 * Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

// Solution
const odds = values => values.filter(element => element % 2 != 0)

// Explanation
// Use the filter method against each element and check if the remainder of that element divided by 2 is not equal to 0
// If the modulus is not equal to 0, that means it is an odd number
// Return that filtered values array
