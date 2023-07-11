// (6 kyu) Remove the Parentheses
/* Instructions
In this kata you are given a string for example:

"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"

Notes

    Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
    There can be multiple parentheses.
    The parentheses can be nested.

*/

// Solution
function removeParentheses(s){
    // init vars
    let result = ""  
    let parenthesesCount = 0

    // loop through string, and if parenthesesCount is greather than 0, do not concatenate the current element to the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') parenthesesCount++
        else if (s[i] === ')') parenthesesCount--
        else if (parenthesesCount === 0) {
            result += s[i]
        }
    }

    // this will give us the result of only our string that is not within parentheses
    return result
}
