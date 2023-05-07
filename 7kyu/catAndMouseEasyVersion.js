// (7 kyu) Cat and Mouse - Easy Version
/* Instructions
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

*/

// Solution
const catMouse = (x) => (x.indexOf('m') - x.indexOf('C') > 4) ? 'Escaped!' : 'Caught!'

// If the index of the mouse is greater than the index of the Cat by at least 4 (because of 0-based indexing), then they `Escaped!` Otherwise, they are `Caught!`
