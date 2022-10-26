// (7 kyu) Factorial
// Instructions
/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

// Solution
function factorial(n){
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i
    }
    return factorial
}

// Explanation
/* Initially set the factorial variable to 1 (if we start at 0, it will always equal 0)
 * Then, we loop through from 1 to the given number
 * Then, we multiply the factorial by each number that is iterated through
 * This will give us the factorial of the provided argument
 */
