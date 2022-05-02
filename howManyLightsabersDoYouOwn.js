// (8 kyu) How many lightsabers do you own?
/* Instructions
 * Inspired by the development team at Vooza, write the function that

    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.

The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18

*/

// Solution
function howManyLightsabersDoYouOwn(name) {
  return (name === "Zach") ? 18 : 0
}

// Refactored
const howManyLightsabersDoYouOwn = name => (name === "Zach") ? 18 : 0

// Explanation
// This takes a simple conditional check using a ternary operator.
// Check if the name is equal to Zach. If it is, we return 18, or else return 0.
