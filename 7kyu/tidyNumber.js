// (7 kyu) Tidy Numbmer (Special Numbers Series #9)
/* Instructions
 * Definition

A Tidy number is a number whose digits are in non-decreasing order.
Task

Given a number, Find if it is Tidy or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .

    Return the result as a Boolean

Input >> Output Examples

tidyNumber (12) ==> return (true)

Explanation:

The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)

Explanation:

The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)

Explanation:

The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)

Explanation:

The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)

Explanation:

The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3
*/


// Solution
const tidyNumber = n => {

    let str = String(n)
    let i = 0

    while (i < str.length) {
        if (Number(str[i]) > Number(str[i+1])) {
            return false
        }
        i++
    }

    return true

}

// Explanation
// Convert the given number argument into a string using the String() wrapper
// Use a loop to iterate through each character in the string
// Use a conditional and the Number wrapper to check if the number value of each character is greater than the next
// If any of the current iterations are greater than the next iterations, return false
// Or else, if all of the elements are less than the next iterations, return true after the loop
