// (7 kyu) Count the Digit 
/*
 * Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1
 */


// Solution
function nbDig(n, d) {

    let count = 0
    let arr = []

    for(let i = 0; i <= n; i++) {
        arr.push(i ** 2)
    }

    let str = arr.join('')

    for (let i = 0; i < str.length; i++) {
        if (str[i] == d) {
            count++
        }
    }

    return count
    
}

// Explanation
// Initialize a count variable and assign it the value of 0
// Initialize an empty array variable
// Loop through each element from 0 to n (inclusive) and push the result into the array
// Join the array into a string so that we can loop through each character or digit in the string
// If the characer is equal to d in value (not value and type), then add 1 to the count
// FInally, return the count
