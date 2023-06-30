// (7 kyu) All Star Code Challenge #3
/* Instructions
This Kata is intended as a small challenge for my students

Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""

*/

// Solution
const removeVowels = str => {
    let regex = /[aeiou]/g

    str = str.replaceAll(regex, '')

    return str
}

// Explanation
// Define a global regex expression that checks for a vowel
// Use the string `.replaceAll` method to reassign the string by replacing each valid regex instance with an empty string
// Return the string
