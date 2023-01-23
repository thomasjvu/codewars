// (7 kyu) Functional Addition
/* Instructions
 * Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/

// Solution
function add(n) {
    return function (m) {
        return n + m
    }
}

// Explanation
// Create a new function within the function that can take a new parameter
// Return the first number plus the second number
