// (7 kyu) Find the Vowels
/* Instructions
 * We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

// Solution
function vowelIndices(word){
  let arr = []
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === 'a' || word[i].toLowerCase() === 'e' || 
        word[i].toLowerCase() === 'i' || word[i].toLowerCase() === 'o' || 
        word[i].toLowerCase() === 'u' || word[i].toLowerCase() === 'y') {
      arr.push(i + 1)
    }
  }
  return arr
}

// Explanation
// Instantiate an empty array to the index values of the vowels in the given word
// Loop through each element in the given string (word) and check if the element's lowecase equivalent is equal to one of the 6 vowels
// If it is a vowel, push the index + 1 onto the array (the question asks for not zero-indexed)
// Return the filled out array
