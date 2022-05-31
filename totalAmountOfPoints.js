// (8 kyu) Total Amount of Points
/* Instructions
 * Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

    our team always plays 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
*/

// Solution

function points(games) {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      sum += 3
    } else if (games[i][0] === games[i][2]) {
      sum += 1
    }
  }
  return sum
}

// Explanation
// Instantiate a new variable which holds the sum of points
// Loop through each element in the array where each index will be a game. The first element (0th index) within that index will be our points, and the third element (2nd index) will be the opponent's.
// Use a conditional comparison to determine which games points are awarded. Then, return the total sum of points after the loop is finished.
