// (8 kyu) Enumerable Magic - Does My List Include This?
// Instructions
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// Solution
function include(arr, item){
  return (arr.includes(item)) ? true : false
}

// Explanation
// We can use the array method `.includes()` to check if our array includes a certain value, which in this case is item.
// The ternary operator is used to say if the condition is true, return true, otherwise return false.

// Refactored
const include = (arr, item) => arr.includes(item)

// This can be reduced into an arrow function that doesn't need the ternary operator because the `.includes()` method will inherently return a true or false value.
