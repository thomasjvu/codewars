// (5 kyu) Math Issues
/* Instructions
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()

*/

// Solution

Math.round = function(number) {
  let temp = String(number).split('.')
  
  if (number * 10 % 10 !== 0) {
    if (Number(temp[1][0]) >= 5 ) {
      return (Number(temp[0]) + 1)
    } else {
      return (Number(temp[0]))
    }  
  }
  
  return number
  
};

Math.ceil = function(number) {
  let temp = String(number).split('.')
  // if number has a decimal place
  if (number * 10 % 10 !== 0) {
    return Number(temp[0]) + 1
  } else {
    return number
  }
};

Math.floor = function(number) {
  let temp = String(number).split('.')
  
  return Number(temp[0])
};

// Explanation
// For each algorithm, set a temp variable equal to the given number that is an array of each side (left and right of decimal)
// Then, in each function, check if the number contains a decimal (otherwise, that number is whole and should be returned)
// ROUND:
// Within numbers that indeed have decimals, check if decimal is greater than or equal to 5, in which case, round up, otherwise, round down.
// CEIL:
// Get the temp array, check if there is a decimal and if there is, return the first element of that array as a number + 1; otherwise, return the number
// FLOOR:
// Simply get the temp array and return the first element of that array as a number
