// (7 kyu) Reverse the bits in an integer
/* Instructions
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.

*/

// Solution
function reverseBits(n) {

    let binary = n.toString(2) // convert number to binary (2)

    let reverse = binary.split('').reverse().join('') // split string to array, reverse elements, then join back together

    return parseInt(reverse, 2) // return the binary converted back into a number; 2 stands for the binary # representation

}
