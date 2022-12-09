// (7 kyu) Gauß needs help! (Sums of a lot of numbers)
/* Instructions
Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

f(n=100) // returns 5050 

It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

    Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code.

    Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

Credits: this kata was inspired by the farzher's kata 'Sum of large ints' . In fact, it can be seen as a sort of prep kata for that one.
*/

// Solution
function f(n) {
    if (n <= 0 || typeof n !== "number" || n !== Math.ceil(n) ) {
        return false
    }

    let i = 0;
    let sum = 0

    while (i <= n) {
        sum += i
        i++
    }

    return sum
}

// Explanation
// First, check if n meets the qualifying conditions (is greater than 0, is a number, and is an integer).
// If n does not meet those conditions, return false
// Then if it does, continue on in a while loop
// Loop through every number from 1 to n, and for each iteration add the current number to a sum variable
// Return the sum
