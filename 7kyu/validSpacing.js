// (7 kyu) Valid Spacing
/* Instructions
Task

Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true

Note - there will be no punctuation or digits in the input string, only letters.
*/

// Solution
function validSpacing(s) {
    // trim leading and trailing whitespace, and split given string into an array
    let arr = s.trim().split('') 

    // loop through array and check if there are adjacent spaces, and if so, remove the space
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === ' ' && arr[i+1] === ' ') {
            arr.splice(i, 1)
        }
    }

    // the valid spaced string is the array now joined together
    let valid = arr.join('')

    // return true or false depending on if the given string is equal to the valid string
    return (s === valid)
}
