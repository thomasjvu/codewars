// (7 kyu) Find the capitals
// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
//


// Solution
let capitals = function (word) {
  let arr= word.split('')
  let newArr = []
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      newArr.push(i)
    }
  }
  return newArr
}

// Explanation
// start by splitting the given word argument into an array using the `.split('')` method.
// Then, create a new array that indexes of capitals will be pushed into
// Use a for loop to go through each element in the initial array
// For each index that is equal to the .toUpperCase() of that index, we push onto the new array
// return the new array
