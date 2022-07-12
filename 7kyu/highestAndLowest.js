// (7 kyu) Highest and Lowest
/* Instructions
 * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
    Examples
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
    Notes
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
 */

// Solution
function highAndLow(numbers){
  newArr = numbers.split(' ').map(element => Number(element)).sort((a, b) => b - a)
  return `${newArr[0]} ${newArr[newArr.length-1]}`
}

// Explanation
// My solution was to create a new array by splitting the array, mapping each element to a number so that it can be sorted from highest to lowest. Then, I used string literals to add the specific high and lowest array elements into a single string.
