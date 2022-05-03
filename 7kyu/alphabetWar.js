// (7 kyu) Alphabet War
/* Instructions
 * Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims.
Example

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

// Solution
function alphabetWar(fight) {
  let sum = 0
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      sum -= 4
    } else if (fight[i] === "p") {
      sum -= 3
    } else if (fight[i] === "b") {
      sum -= 2
    } else if (fight[i] === "s") {
      sum -= 1
    } else if (fight[i] === "m") {
      sum += 4
    } else if (fight[i] === "q") {
      sum += 3
    } else if (fight[i] === "d") {
      sum += 2
    } else if (fight[i] === "z") {
      sum += 1
    }
  }
  if (sum > 0) {
    return "Right side wins!"
  } else if (sum < 0) {
    return "Left side wins!"
  } else {
    return "Let's fight again!"
  }
}

// Explanation
// Set the left side to be negative numbers, and set the right side to be positive numbers
// Iterate through each letter in the string, and it it to a sum variable
// If it is a negative number, that means the left side was more powerful
// If it is a positive number, that means the right side was more powerful
// If it is 0, then it is a draw.
