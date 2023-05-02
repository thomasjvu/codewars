// (6 kyu) Your order, please
/* Instructions
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/

// Solution
function order(words) {
    // if empty string, return empty string
    if (words === '') return ''

    // initialize empty array
    const arr = []

    // split words string into array of words separated by their spaces
    words = words.split(' ')

    // loop through each word and check it over each word
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            // if the current word contains the index + 1, push it onto the array
            if (words[j].includes(`${i + 1}`)) {
                arr.push(words[j])
            }
        }
    }

    // return the array joined as a string of words separated by spaces
    return arr.join(' ')

}

// Time Complexity: O(n^2), Quadratic Time - Nested for...loop because each element in the array is iterated over multiple times (the length of the array)
