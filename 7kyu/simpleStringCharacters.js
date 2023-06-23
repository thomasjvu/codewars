// (7 kyu) Simple String Characters
/* Instructions
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.

Good luck!

*/

// Solution
function solve(s){
  
  let upperCnt = 0
  let lowerCnt = 0
  let numberCnt = 0
  let specialCnt = 0
  
  let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowers = uppers.toLowerCase()
  let numbers = "1234567890"
  
  for (let i = 0; i < s.length; i++) {
  
    if (uppers.includes(s[i])) upperCnt++
    else if (lowers.includes(s[i])) lowerCnt++
    else if (numbers.includes(s[i])) numberCnt++
    else specialCnt++
    
  }
  
  return [upperCnt, lowerCnt, numberCnt, specialCnt]
}

// Explanation
// Initialize count variables for each string type
// define string variables that hold each possible letter (upper and lower) or number
// loop through the length of the given string
// use the .includes() method in an if-else..if-else block to check which type the current element is, incrementing the respective count
// return an array of our count values in the provided order
