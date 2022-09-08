// (8 kyu) Rock Paper Scissors!
/* Instructions
 * Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// Solution
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"
  } else if (p1 === "scissors" && p2 === "rock" || p1 === "rock" && p2 === "paper" || p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!"
  } else {
    return "Player 1 won!"
  }
};

// Explanation
// Simple if...else if conditional statement
// Check if p1 and p2 are the same, if so, return a draw
// then, check the win conditions for player 2, and return the statement that player 2 won
// or else, that means player 1 has won.
