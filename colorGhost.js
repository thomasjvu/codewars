// (8 kyu) Color Chost
/* Instructions
 * Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

// Solution
const Ghost = function() {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)]
}

// Explanation
// Use this.color to give the Ghost a random value from the array.
// Use Math.floor along with Math.random() * 4 to choose 1 of the 4 values randomly.

