// (7 kyu) Sum of Numbers from 0 to N
// Instructions:
/*
Description: 

We want to generate a function that computes the series starting from 0 and ending until the given number.
Example:

Input:

> 6

Output:

    0+1+2+3+4+5+6 = 21

Input:

> -15

Output:

    -15<0

Input:

> 0

Output:

    0=0

*/


// Pseudocode
// Start from 0 to the argument (n)



// Solution
const SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        let sum = 0
        let str = '0'
        let i = 1
        while (i <= count) {
            sum += i
            str += `+${i}`
            i++
        }
        if (count < 0) {
            return `${count}<0`
        } else if (count === 0) {
            return '0=0'
        } else {
            return `${str} = ${sum}`
        }
    }

    return SequenceSum
})()

// Explanation
// Declare a variable to hold our sum, and assign it an initial value of 0
// Initialize a string with a value of '0'
// Iniitalize our loop counter, i, and set it equal to 1
// Use a while loop for each iteration where i is less than or equal to the count argument
// For each iteration, add i to the sum, add `+${i}` to the string, and increment the loop counter
// Then, use an if-statement to account for the different edge caases
// if count is 0, then return '0=0'
// if count is less than 0, return `${count}<0`
// otherwise, return an interpolated string that concatenates the str and sum variables. `${str} = ${sum}`
