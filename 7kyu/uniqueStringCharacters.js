// (7 kyu) Unique String Characters
/* Instructions
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates

*/

// Solution
function solve(a, b) {
    let str = ''

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            str += a[i]
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            str += b[i]
        }
    }

    return str

}

// Explanation
// Instantiate an emptry string variable '', str
// Loop through each element in the a string, and if the b string doesn't include that element, concatenate it to the str variable
// Loop through each element in the b string, and if the a string doesn't include that element, concatenate it to the str variable
// Return the str variable
