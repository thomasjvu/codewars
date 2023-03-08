// (7 kyu) ToLeetSpeak
/* Instructions
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"

In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}
*/

function toLeetSpeak(str) {
    let leet = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            leet += '@'
        } else if (str[i] === 'B') {
            leet += '8'
        } else if (str[i] === 'C') {
            leet += '('
        } else if (str[i] === 'D') {
            leet += 'D'
        } else if (str[i] === 'E') {
            leet += '3'
        } else if (str[i] === 'F') {
            leet += 'F'
        } else if (str[i] === 'G') {
            leet += '6'
        } else if (str[i] === 'H') {
            leet += '#'
        } else if (str[i] === 'I') {
            leet += '!'
        } else if (str[i] === 'J') {
            leet += 'J'
        } else if (str[i] === 'K') {
            leet += 'K'
        } else if (str[i] === 'L') {
            leet += '1'
        } else if (str[i] === 'M') {
            leet += 'M'
        } else if (str[i] === 'N') {
            leet += 'N'
        } else if (str[i] === 'O') {
            leet += '0'
        } else if (str[i] === 'P') {
            leet += 'P'
        } else if (str[i] === 'Q') {
            leet += 'Q'
        } else if (str[i] === 'R') {
            leet += 'R'
        } else if (str[i] === 'S') {
            leet += '$'
        } else if (str[i] === 'T') {
            leet += '7'
        } else if (str[i] === 'U') {
            leet += 'U'
        } else if (str[i] === 'V') {
            leet += 'V'
        } else if (str[i] === 'W') {
            leet += 'W'
        } else if (str[i] === 'X') {
            leet += 'X'
        } else if (str[i] === 'Y') {
            leet += 'Y'
        } else if (str[i] === 'Z') {
            leet += '2'
        } else if (str[i] === ' ') {
            leet += ' '
        }
    }
    return leet
}

// Explanation
// Simply loop through each element in the string and check what character it is, and concatenate the new leet string with the correct leet speak

// Refactored
