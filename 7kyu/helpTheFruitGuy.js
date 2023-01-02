// (7 kyu) Help the Fruit Guy
/* Instructions
 * Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
Notes

    If the array is null/nil/None or empty you should return empty array ([]).
    The rotten fruit name will be in this camelcase (rottenFruit).
    The returned array should be in lowercase.
*/


// Solution
function removeRotten(bagOfFruits) {
  if (!bagOfFruits || !bagOfFruits.length) {
    return [];
  }

  const freshFruits = [];

  for (let fruit of bagOfFruits) {
    if (fruit.startsWith("rotten")) {
      fruit = fruit.slice(6).toLowerCase();
    }
    freshFruits.push(fruit.toLowerCase());
  }

  return freshFruits;
}

// Explanation
// First, check if the given array is empty or null, and if it is, return an empty array
// Initialize an array to store the fresh fruits
// Iterate through the array of fruits
// Check if the fruit starts with "rotten" using the string `.startsWith()` method
// If it does, remove the "rotten" prefix and lowercase the fruit
// Push the fruit (either fresh or fixed) to the FreshFruits array, lowercasing it
// Return the freshFruits array
