// (6 kyu) Replace With Alphabet Position
/* Instructions
 * Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// Solution
function alphabetPosition(text) {
  let position = []
  text = text.toUpperCase()
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "A":
        position.push(1)
        break;
      case "B":
        position.push(2)
        break;
      case "C":
        position.push(3)
        break;
      case "D":
        position.push(4)
        break;
      case "E":
        position.push(5)
        break;
      case "F":
        position.push(6)
        break;
      case "G":
        position.push(7)
        break;
      case "H":
        position.push(8)
        break;
      case "I":
        position.push(9)
        break;
      case "J":
        position.push(10)
        break;
      case "K":
        position.push(11)
        break;
      case "L":
        position.push(12)
        break;
      case "M":
        position.push(13)
        break;
      case "N":
        position.push(14)
        break;
      case "O":
        position.push(15)
        break;
      case "P":
        position.push(16)
        break;
      case "Q":
        position.push(17)
        break;
      case "R":
        position.push(18)
        break;
      case "S":
        position.push(19)
        break;
      case "T":
        position.push(20)
        break;
      case "U":
        position.push(21)
        break;
      case "V":
        position.push(22)
        break;
      case "W":
        position.push(23)
        break;
      case "X":
        position.push(24)
        break;
      case "Y":
        position.push(25)
        break;
      case "Z":
        position.push(26)
        break;
    }
  }
  return position.join(' ')
}

// Explanation
// Reassign the text parameter to its `.toUppercase()` equivalent
// Use a switch..case method within a for loop to iterate through each character in the string and push the corresponding number into a new array variable made to hold all of our numbers.
// Use the `.join(' ')` method to join each element in the array together as a string with a space in between each element and return that result.
