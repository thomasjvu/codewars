// (8 kyu) Filter out the geese
// Instructions:
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


// Solution
function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"] // gather list of geese
    return birds.filter(item => !geese.includes(item)) // returns shallow array


// Explanation
// The array method `filter()` is an iterator that enables us to create a new array filtered down to just the elements that pass the test implemented by the provided callback function.
// In this case, we loop through each item in the array, and filter it down to the elements that are not included in our geese array, which will ultimately give us an array without gooses.

// Solution (refactored)
const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
gooseFilter = birds => birds.filter(item => !geese.includes(item))
