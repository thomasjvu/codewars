// (8 kyu) Enumerable Magic #1 - True for All?
/* Instructions

Task

Create a method all which takes two params:

    a sequence
    a function (function pointer in C)

and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
Example

all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True

*/

// Solution
// function all(arr, fun) {
//     for (let i = 0; i < arr.length; i++) {
//         if (fun(arr[i]) !== true) {
//             return false
//         }
//     }
//     return true
// }

// Explanation
// Iterate through each element in the array using a for..loop
// If the function that passes in the current index of the array does not equal true for any iteration, immediately return false
// After the loop, return true if false was not returned


// ES6 Syntax

const all = (arr, fun) => arr.every(fun)

// Explanation
// Use the array `.every()` method to test whether all elements in the array pass the test implemented by the provided function.
