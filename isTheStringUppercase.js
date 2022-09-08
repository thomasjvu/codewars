// (8 kyu) Is the string uppercase?
/* Instructions
 * Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

// Solution
String.prototype.isUpperCase = function() {
    return(this.toUpperCase() === this.toString())
}

// Explanation
// Use `this` to check if the object property as a string is equal to the object property when the .toUpperCase() method is called on it.