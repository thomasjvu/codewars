// (7 kyu) Regexp Basics - is it a vowel?)
/* Instructions
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

// Solution
String.prototype.vowel = function() {
  let regex = /^[aeiou]$/i
  return regex.test(this)
};

// Explanation
// `^` identifies the start of a string
// `[aeiou]` identifies that we want any vowel
// `$` identifies the end of a string
// `/i` identifies that we are searching for osmething case insensitive
// This regexp checks if the given string (identified by this) is a single vowel character
