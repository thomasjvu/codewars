// (8 kyu) Find Maximum and Minimum Values of a List
/* Instructions
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes

    You may consider that there will not be any empty arrays/vectors.
*/

// Solution
var min = function(list){
  list = list.sort((a,b) => a - b)
  return list[0];
}

var max = function(list){
  list = list.sort((a,b) => b - a)
  return list[0];
}

// Explanation
// Use the array `.sort((a,b => a-b))` method to sort an array in ascending order
// Use the array `.sort((a,b => b-a))` method to sort an array in descending order
