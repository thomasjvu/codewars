// (6 kyu) Detect Pangram
/* Instructions
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// Solution
function isPangram(string){
  string = string.toLowerCase()
  let set = new Set(string)
  let arr = Array.from(set)
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (
       arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c' || arr[i] === 'd' || 
       arr[i] === 'e' || arr[i] === 'f' || arr[i] === 'g' || arr[i] === 'h' || 
       arr[i] === 'i' || arr[i] === 'j' || arr[i] === 'k' || arr[i] === 'l' || 
       arr[i] === 'm' || arr[i] === 'n' || arr[i] === 'o' || arr[i] === 'p' || 
       arr[i] === 'q' || arr[i] === 'r' || arr[i] === 's' || arr[i] === 't' || 
       arr[i] === 'u' || arr[i] === 'v' || arr[i] === 'w' || arr[i] === 'x' || 
       arr[i] === 'y' || arr[i] === 'z' 
    ) {
      total += 1
    }
  else {
      total += 0
    }
 }
 return (total >= 26) ? true : false 
}

// Explanation
// First, reassign the string to its lowercase equivalent using the .toLowerCase() string method.
// Then, create a new Set() object from the string to get all of the unique elements
// Then, convert that set to an array using the `Array.from()` method
// Then, loop through the array for each letter in the alphabet, and add +1 a total variable if a letter exists
// Finally, check if the string is greater than or equal to 26. If it is, return true, or else, return false
