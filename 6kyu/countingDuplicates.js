// (6 kyu) Counting Duplicates
/* Instructions
 * Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


// Solution
function duplicateCount(text) {
    let obj = {}
    let count = 0

    for (let i of text) {
        i = i.toUpperCase()
        if(!obj[i]) {
            obj[i] = 1
        } else {
            obj[i]++
        }
    }
    console.log(obj)
    for (let i in obj) {
        if(obj[i] > 1) {
            count++
        }
    }
    return count
}


// Explanation
// Create variable that holds the count of duplicates
// Create hashmap for object
// Loop through the text variable
// If the value doesn't already exist in the map, set it equal to 1
// If the value does already exist in the map, increment it
// Set each element as toUpperCase() to prevent edge cases
// If the element in the object is > 1, then add 1 to count
// Return the count
