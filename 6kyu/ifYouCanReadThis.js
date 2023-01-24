// (6 kyu) If you can read this...
/* Instructions
*/

// Solution
function to_nato(words) {
  words = words.toLowerCase()
  let arr = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === 'a') {
      arr.push('Alfa ')
    } else if (words[i] === 'b') {
      arr.push('Bravo ')
    } else if (words[i] === 'c') {
      arr.push('Charlie ')
    } else if (words[i] === 'd') {
      arr.push('Delta ')
    } else if (words[i] === 'e') {
      arr.push('Echo ')
    } else if (words[i] === 'f') {
      arr.push('Foxtrot ')
    } else if (words[i] === 'g') {
      arr.push('Golf ')
    } else if (words[i] === 'h') {
      arr.push('Hotel ')
    } else if (words[i] === 'i') {
      arr.push('India ')
    } else if (words[i] === 'j') {
      arr.push('Juliett ')
    } else if (words[i] === 'k') {
      arr.push('Kilo ')
    } else if (words[i] === 'l') {
      arr.push('Lima ')
    } else if (words[i] === 'm') {
      arr.push('Mike ')
    } else if (words[i] === 'n') {
      arr.push('November ')
    } else if (words[i] === 'o') {
      arr.push('Oscar ')
    } else if (words[i] === 'p') {
      arr.push('Papa ')
    } else if (words[i] === 'q') {
      arr.push('Quebec ')
    } else if (words[i] === 'r') {
      arr.push('Romeo ')
    } else if (words[i] === 's') {
      arr.push('Sierra ')
    } else if (words[i] === 't') {
      arr.push('Tango ')
    } else if (words[i] === 'u') {
      arr.push('Uniform ')
    } else if (words[i] === 'v') {
      arr.push('Victor ')
    } else if (words[i] === 'w') {
      arr.push('Whiskey ')
    } else if (words[i] === 'x') {
      arr.push('Xray ')
    } else if (words[i] === 'y') {
      arr.push('Yankee ')
    } else if (words[i] === 'z') {
      arr.push('Zulu ')
    } else if (words[i] === ' ') {
      arr.push('')
    } else {
      arr.push(words[i] + ' ')
    }
  }
  
  return arr.join('').trim()
}

// Explanation
// Create a new array
// Loop through each element in the words string using a for..loop
// For each element, add its NATO equivalent with a "space" afterwards to the array
// If the element happens to be a space, add nothing to the array
// Return the array joined together as a string with the .trim() method to remove any ending whitespace.
