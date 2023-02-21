// (7 kyu) Jumping Number (Special Numbers Series #4)
/* Instructions
Definition

Jumping number is the number that All adjacent digits in it differ by 1.
Task

Given a number, Find if it is Jumping or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .

    Return the result as String .

    The difference between ‘9’ and ‘0’ is not considered as 1 .

    All single digit numbers are considered as Jumping numbers.

Input >> Output Examples

jumpingNumber(9) ==> return "Jumping!!"

Explanation:

    It's single-digit number

jumpingNumber(79) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(23) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(556847) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(4343456) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(89098) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(32) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1
*/

// Solution
function jumpingNumber(n) {
    let str = String(n)

    if (str.length === 1) return "Jumping!!"

    let i = 0
    let j = i + 1

    while (j < str.length) {
        if (Number(str[j]) !== Number(str[i]) + 1 && Number(str[j]) !== Number(str[i]) - 1) {
            return "Not!!"
        }
        i++
        j++
    }
    return "Jumping!!"
}

// Explanation
// Instantiate a new variable, str, which is the String equivalent of n
// If the length of str is 1, then return "Jumping!!"
// Otherwise, use a while loop with i as the current and j as the next number in the loop
// Check if j is both not equal to the element at index i plus 1 or minus 1, and if not, return "Not!!"
// Otherwise, by the end of the loop, return "Jumping!!"
