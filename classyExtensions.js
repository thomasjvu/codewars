// (8 kyu) Classy Extensions
/* Instructions
 
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

Reference: JS, Ruby, Python.

*/

// Solution
class Cat extends Animal {
    speak() {
        return `${this.name} meows.`
    }
}

// Explanation
// The name attribute is instructed to be passed with this.name (already in the Animal class)
// Within the Cat class, add the function `speak()` to return the name attribute + meows using string literal
