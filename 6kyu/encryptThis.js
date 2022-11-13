// (6 kyu) Encrypt This!
/* Instructions
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// Solution
 const encryptThis = text => {
   let strArr = text.split(' ')
   let output = []
   
   strArr.forEach(str => {
     if (str.length === 1) {
       output.push(str.charCodeAt(0))
     } else {
       let tempStr = str.split('')
       tempStr[0] = str.charCodeAt(0)
       tempStr[1] = str[str.length -1]
       tempStr[str.length - 1] = str[1]
       output.push(tempStr.join(''))
     }
   })
   
   return output.join(' ')
}

// Explanation
// Split the provided "text" string argument into an array using the `.split(' ') method
// Create a new array "output" which will hold our encrypted text
// Iterate through the array using forEach method.
// If the string is just 1 character, push the str.charCodeAt(0) method to take the 0th element in the index and push it onto the output 
// if the string is more than 1 character, then split the string into array elements
// for the 0th index of the string, use the charCodeAt() method
// for the 1st index of the string, ressaign it to the last element of the string using str.length -1 (which will get the last element)
// for the last element of the string, reassign it to the first index
// push the temporary string into the output
// return the output joined together by spaces





