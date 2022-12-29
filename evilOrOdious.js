// (8 kyu) Evil or Odious
/* Instructions
 * The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)
*/


// Solution
const evil = n => {
    let bin = n.toString(2)
    let count = 0
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            count++
        }
    }
    return (count % 2 === 0) ? "It's Evil!" : "It's Odious!"
}

// Explanation
// Get the binary string equivalent of a number using the `.toString(2)` method.
// Declare a count variable and set it equal to 0
// Loop through each element in the string (our binary string)
// If the binary string element is '1', then add 1 to the count
// Finally, use a ternary to see if the count is perfectly divisible by 2, which makes it even or else odd.
// Return the result for if its even or odd.
