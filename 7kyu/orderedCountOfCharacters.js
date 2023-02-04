// (7 kyu) Ordered Count of Characters
/* Instructions
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// Solution
const orderedCount = text => {
    let obj = {}
    let arr = []
    let uniqueChars = []

    for (const char of text) {
        obj[char] = obj[char] + 1 || 1
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char)
        }
    }

    for (const char of uniqueChars) {
        arr.push([char, obj[char]])
    }

    return arr
}

// Explanation
// Instantiate an empty object {}, obj
// Instantiate an empty array [], arr
// Instantiate another empty array [], uniqueChars
// Begin our hashmap by looping through each character of the text and adding it to our object
// In the same loop, push each unique character into the uniqueChars array
// Then, for each character in the uniqueChars array, push the character and the hashmap value of the object into our arr variable
// Finally, return the arr variable
