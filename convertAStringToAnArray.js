// (8 kyu) Convert a string to an array
/* Instructions
 * Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Solution
function stringToArray(string){
    return string.split(' ')
}

// Explanation
// Use the string `.split(' ')` method to split a string into an array, separating each element by where there is a space in the string.

