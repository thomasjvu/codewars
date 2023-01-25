// (7 kyu) The Office II - Boredom Score
/* Instructions
 * Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

// Solution
function boredom(staff){
  let score = 0
  
  for (key in staff) {
    if (staff[key] === "accounts") {
      score += 1
    } else if (staff[key] === "finance") {
      score += 2
    } else if (staff[key] === 'canteen') {
      score += 10
    } else if (staff[key] === 'regulation') {
      score += 3
    } else if (staff[key] === 'trading') {
      score += 6
    } else if (staff[key] === 'change') {
      score += 6
    } else if (staff[key] === 'IS') {
      score += 8
    } else if (staff[key] === 'retail') {
      score += 5
    } else if (staff[key] === 'cleaning') {
      score += 4
    } else if (staff[key] === 'pissing about') {
      score += 25
    }
  }
  
  if (score < 100 && score > 80) {
    return 'i can handle this'
  }
  else if (score <= 80) {
    return 'kill me now'
  } else {
    return 'party time!!'
  }
  
}

// Explanation
// Instantiate a new variable, score, that is set equal to 0
// Loop through each key in the staff object using a for..in loop
// For each iteration, check the corresponding staff[key] to be equal to a department
// Add the corresponding number to the existing score using +=
// At the end of the loop, use a conditional (if, else if.. else)
// First, check if the score is between 100 and 80, and if so, return 'i can handle this'
// Then, check if the score is less than or equal to 80, and if so, return 'kill me now'
// Otherwise, the score must be greater than 100, so return 'party time!!'
