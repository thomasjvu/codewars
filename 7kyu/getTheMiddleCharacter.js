// (8 kyu) Get the Middle Character
/* Instructions
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

// Solution
function getMiddle(s)
{
  let n = s.length // 12 ThomasIsCold
  let mid1 = Math.ceil(n / 2) - 1 // index 5
  let mid2 = mid1 + 1 // index 6
  
  console.log(s)
  
  if (n === 1) {
    return s
  } else if (n % 2 == 0) {
    return s[mid1] + s[mid2]
  } else {
    return s[mid1]
  }
}

// Explanation
// Instantiate a number variable that holds the length of our string
// If the string is even, there will be 2 middles, so instantiate variables to hold middle1 and middle2
// Mid1 should be Math.ceil(N / 2 - 1) because indexes are 0-based so we should subtract 1 and get the ceiling in case the string length is odd
// Mid2 should be mid1 + 1 to get the next character in the middle
// So if the string is 1 character, return the string
// If the string is even, return the elements at mid1 + mid2 concatenated
// Else, return the element at mid1
