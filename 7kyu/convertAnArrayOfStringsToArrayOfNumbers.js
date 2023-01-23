// (7 kyu) Convert an array of strings to array of numbers
/* Instructions
 * Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

// Solution
function toNumberArray(stringarray){
    return stringarray.map(element => Number(element))
}

// Explanation
// Use the .map() method to take each element in the array and return a new array that users the Number constructor on each element.
