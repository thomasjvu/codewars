// Convert to Binary

// Instructions:
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// Solution
function toBinary(n){
    return Number(n.toString(2));
}

// Refactored (Arrow Function)
const toBinary = n => Number(n.toString(2))

// Explanation
// The `.toString()` method can take a radix as the parameter. The radix 2 is for binary numbers, so using that
// in our argument enables us to convert the number to a binary string. Then, we convert the binary string back to
// a number using the `Number()` function.

