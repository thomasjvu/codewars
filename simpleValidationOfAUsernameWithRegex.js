// (8 kyu) Simple validation of a username with regex
/* Instructions
Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore

Length should be between 4 and 16 characters (both included).

*/

// Solution
function validateUsr(username) {
    
  const res = /^[a-z0-9_]{4,16}$/
    
  return res.test(username)

}

// Explanation
// The regex is opened and closed by `/` and `/`
// The `^` and `$` indicate the start and end of a string.
// The [a-z0-9_] indicates any and all values from a to z, 0 - 9, and underscore
// The {4,16} validates the length to be between 4 and 16 characters
