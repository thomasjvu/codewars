// (8 kyu) Count by x
/* Instructions
 * Create a function with two arguments that will return an array of the first n multiples of x.

    Assume both the given number and the number of times to count will be positive numbers greater than 0.

    Return the results as an array or list ( depending on language ).
    Examples

    countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
    countBy(2,5) === [2,4,6,8,10]
*/

// Solution
function countBy(x, n) {
    let z = []
    for (let i = 1; i<= n; i++) {
        z.push(i * x)
    }
    return z
}

// Refactored
const countBy = (x, n) => {
  let z = []
  for (let i = 1; i <= n; i++) {
   z.push(i * x) 
  }
  return z
}

// Explanation
// Start by creating an empty array to hold the new list of counted numbers
// Use a for loop starting at 1, and because we want to get N numbers of multiples, that becomes the end condition
// Then, use i++ as the loop counter to loop through each number as a multiple until i reaches n
// Then, push the loop counter (i) multiplied by x for each iteration to the z array
// This will result in an array of all the first n multiples of x
