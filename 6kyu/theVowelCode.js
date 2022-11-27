// (6 kyu) The Vowel Code
// Instructions
/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// Solution
function encode(string) {
  let encoded = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      encoded.push('1')
    } else if (string[i] === 'e') {
      encoded.push('2')
    } else if (string[i] === 'i') {
      encoded.push('3')
    } else if (string[i] === 'o') {
      encoded.push('4')
    } else if (string[i] === 'u') {
      encoded.push('5')
    } else {
      encoded.push(string[i])
    }
  }
  return encoded.join('')
}

function decode(string) {
  let decoded = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '1') {
      decoded.push('a')
    } else if (string[i] === '2') {
      decoded.push('e')
    } else if (string[i] === '3') {
      decoded.push('i')
    } else if (string[i] === '4') {
      decoded.push('o')
    } else if (string[i] === '5') {
      decoded.push('u')
    } else {
      decoded.push(string[i])
    }
  }
  return decoded.join('')
}

// Explanation
// Loop through the string and add each character to the new corresponding array depending on the result of the conditional statement.
// Join the new arrays back into a string and return it within the related function
