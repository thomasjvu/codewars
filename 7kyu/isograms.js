// (7 kyu) Isograms
/* Instructions
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

    Example: (Input --> Output)

    "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

// Solution

function isIsogram(str) {
    return new Set((str).toUpperCase()).size === str.length
}

// Explanation
// Create a new Set object using the `new Set()` keyword to break down the string into an object containing unique elements
// Use the .toUpperCase() to make sure that we are accounting for case-sensitivity
// Get the size of the new Set object using the `.size` property
// If the size is equal to the length of the string, that means all of the elements in the string was unique
// If all the elements in the string are unique, it is an isogram, so the comparison will either return true or false
