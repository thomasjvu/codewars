// (4 kyu) Sum Strings as Numbers
/* Instructions
 * Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java
*/

// Solution
function sumStrings(a, b) {
    let sum = BigInt(a) + BigInt(b)
    return String(sum)
}

// Explanation
// Because we don't want an exponent ('e') character to occur (only numerals) in our solution and we want to account for numbers which might be too large to be represented by the number primitive
// Use the BigInt() to turn a and b to account for really large integer values
// return the sum of both BigInts as a String using the String() primitive wrapper
