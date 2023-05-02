// (7 kyu) How many arguments
/* Instructions
args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

// Solution
function arg_counts(...args) {
    return args.length
}

// Explanation
// Use the function keyword to declare a function named arg_counts
// As a parameter, us the rest parameter syntax `...args` to take a variable number of arguments. This allows any number of arguments to be passed into the function
// Use the .length property to return the length of the args variable array, which gives the number of arguments passed into the function
