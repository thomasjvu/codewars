// (8 kyu) Add Length
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// Solution
function addLength(str) {
    return str.split(' ').map((element) => `${element} ${element.length}`);
}

// Explanation
// First, we should turn the string into an array.
// Then, we can create a new array with the .map method, which is an iterator that will loop through each element in the array and return a new element based on our given callback function.
// The callback function here is to return a string of the element and the length of the element as a new element.
