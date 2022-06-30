// (8 kyu) Remove String Spaces
// Instructions
// Simple, remove the spaces from the string, then return the resultant string.

// Solution
function noSpace(x) {
    return x.split(' ').join('')
}

// Explanation
// Use the string `.split(' ')` method to split the string into an array using a space character as the breakpoint, then join the array elements back into a string using the `.join('')` method.

