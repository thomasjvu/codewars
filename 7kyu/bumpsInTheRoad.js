// (7 kyu) Bumps in the Road
/* Instructions
 * Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

// Solution
function bump(x){
  let str = x.replace(/_/g, '')
  if ( str.length > 15) {
    return "Car Dead"
  } else {
    return "Woohoo!"
  }
}

// Explanation
// Create a new string that replaces all of the "_" in the original string with a blank character.
// Then, check if the number of bumps (remaining length of new string) is greater than 15.
// If it is greater than 15, then return "Car Dead"
// If it is not greater than 15, return "Woohoo!"
