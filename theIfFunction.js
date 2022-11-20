// (8 kyu) The 'if' function
/* Instructions
 * Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.
Example:

_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/


// Solution
function _if(bool, func1, func2) {
    if (bool == true) {
        func1()
    } else {
        func2()
    }
}

// Refactored
const _if = (bool, func1, func2) => {
    return (bool == true) ? func1() : func2()
}

// Explanation
// Use a conditional to check if bool == true
// If it is, return func1()
// or else, return func2()
