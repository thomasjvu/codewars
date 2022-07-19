// (7 kyu) Testing 1-2-3
/* Instructions
 * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

    Write a function which takes a list of strings and returns each line prepended by the correct number.

    The numbering starts at 1. The format is n: string. Notice the colon and space in between.

    Examples: (Input --> Output)

    [] --> []
    ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// Solution
const number = array => array.map((x,i) => `${i+1}: ${x}`)

// Explanation
// We can create a new array that maps each item in the array using the array `.map()` method.
// x = element; i = index; so for each element in the array, we use the function after the arrow.
