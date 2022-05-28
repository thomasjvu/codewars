// (7 kyu) Small enough? - Beginner
// Instructions
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.


// Solution
function smallEnough(a, limit){
  let newArr = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= limit) {
      newArr.push(true)
    } 
  }
  return (newArr.length === a.length) ? true : false
}

// Explanation
// Create a new array
// Loop through each element in the given array
// If the element in the given array is less than or equal to the limit, then we push "true" into the new array
// Then, compare the length of the new array to the length of the given array.
// If the two lengths are equal, then that means all of the values are below or equal to the limit, so you can return true : otherwise false
