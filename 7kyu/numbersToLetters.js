// Codewars (7 kyu) Numbers to Letters
/* Instructions
*/

// Solution
const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')

// Explanation
// Define a string, alpha, that represents teh alphabet in reverse order, as well as the given punctuation
// Use the .map method on the given x array, which maps each item in the array to its corresponding character in the alpha string
// The resulting array of characters is joined into a single string using the .join() method


// Solution (Brute Force)
// function switcher(x){
  
//   let str = ''
  
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === '29') {
//       str += ' '
//     } else if (x[i] === '28') {
//       str += '?'
//     } else if (x[i] === '27') {
//       str += '!'
//     } else if (x[i] === '27') {
//       str += '!'
//     } else if (x[i] === '26') {
//       str += 'a'
//     } else if (x[i] === '25') {
//       str += 'b'
//     } else if (x[i] === '24') {
//       str += 'c'
//     } else if (x[i] === '23') {
//       str += 'd'
//     } else if (x[i] === '22') {
//       str += 'e'
//     } else if (x[i] === '21') {
//       str += 'f'
//     } else if (x[i] === '20') {
//       str += 'g'
//     } else if (x[i] === '19') {
//       str += 'h'
//     } else if (x[i] === '18') {
//       str += 'i'
//     } else if (x[i] === '17') {
//       str += 'j'
//     } else if (x[i] === '16') {
//       str += 'k'
//     } else if (x[i] === '15') {
//       str += 'l'
//     } else if (x[i] === '14') {
//       str += 'm'
//     } else if (x[i] === '13') {
//       str += 'n'
//     } else if (x[i] === '12') {
//       str += 'o'
//     } else if (x[i] === '11') {
//       str += 'p'
//     } else if (x[i] === '10') {
//       str += 'q'
//     } else if (x[i] === '9') {
//       str += 'r'
//     } else if (x[i] === '8') {
//       str += 's'
//     } else if (x[i] === '7') {
//       str += 't'
//     } else if (x[i] === '6') {
//       str += 'u'
//     } else if (x[i] === '5') {
//       str += 'v'
//     } else if (x[i] === '4') {
//       str += 'w'
//     } else if (x[i] === '3') {
//       str += 'x'
//     } else if (x[i] === '2') {
//       str += 'y'
//     } else if (x[i] === '1') {
//       str += 'z'
//     }
//   }
//   return str
// }

// Explanation
// Loop through each number and provide a different condition for each iteration to concatenate the empty string
// Return the filled out string
