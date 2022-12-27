// (7 kyu) Most Digits
/* Instructions
 * Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// Solution

const findLongest = array => {

    let newArr = array.map(element => String(element))
    let mostDigits = newArr[0]

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > mostDigits.length) {
            mostDigits = newArr[i]
        }
    }

    return Number(mostDigits)

}

// Explanation
// Create a new array that is a map of our given array, but with each element as a String
// This will enable us to use the .length property of the string object prototype
// Use a for..loop to go through each element in the new array
// If the element for each index is greater than the current length of the mostDigits variable, set mostDigits equal to that new array element
// When the loop finishes, return the mostDigits variable as a Number datatype
