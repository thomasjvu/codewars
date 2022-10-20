/* Instructions */
// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.

/* Solution */
function preFizz(n) {
  let newArr = []
  for (i = 1; i <= n; i++) {
    newArr.push(i) 
  }
  return newArr
}

// Explanation
// I solved this by created a new variable `let newArr` set to an empty array `=[]`
// Then, I used a simple `for loop` to iterate through each number from 1 until the given number, `n`.
// For each of these numbers, I push it into the end of the `newArr` array variable.
// Lastly, I return the filled out `newArr`.
