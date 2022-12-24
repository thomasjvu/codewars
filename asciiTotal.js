// (8 kyu) ASCII Total
/* Instructions
 * You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

// Solution
function uniTotal (string) {
  let sum = 0
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i)
  }
  return sum
}

// Explanation
// Declare a new variable that will hold our sum and set it equal to 0
// Loop through each index of the string
// For each index, add the ascii value using the .charCodeAt() method on the string object
// Add the value of that element to the sum for each iteration
// Return the sum after all iterations finish
