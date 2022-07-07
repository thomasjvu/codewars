// (8 kyu) The Feast of Many Beasts
/* Instructions
 * All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

// Solution
function feast(beast, dish) {
  if (dish[0] === beast[0] && dish[dish.length - 1] === beast[beast.length - 1]) {
    return true
  } else {
    return false
  }
}

// Explanation
// Strings are 0-based so indexes start at 0. All we have to do is compare the first and last indexes for each argument, and if they are both the same, return true, and if they are not both the same, return false
