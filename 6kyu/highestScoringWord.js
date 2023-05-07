// (6 kyu) Highest Scoring Word
/* Instructions
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// Solution
function high(x){
  
  let scores = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  
  let arr = x.split(' ')
  
  let values = []
  
  for (let i = 0; i < arr.length; i++) {
    let temp = 0
    for (let j = 0; j < arr[i].length; j++) {
      temp += scores[`${arr[i][j]}`]
    }
    values.push(temp)
  }
  
  let highestIndex = values.indexOf(Math.max(...values))
  
  return arr[highestIndex]

}

// Explanation
// Create an object that holds the property-value of character to score values
// Create an array that is split from the 's' string
// Loop through each word in the array
// Loop through each character in each word
// For each character add the total score of each character to a temp value
// For each word add the temp value to an array of values
// Get the indexOf the highest value in the array of values
// Return the original array element at the highest value index
