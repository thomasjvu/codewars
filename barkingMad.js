// (8 kyu) Codewars
/* Instructions
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined

Use method prototypes to enable all Dogs to bark.
*/

// Solution
function Dog (breed) {
    this.breed = breed;
}

Dog.prototype.bark = function() {
    return "Woof"
}

var snoopy = new Dog("Beagle")

// Explanation
// Add a new method to the Dog prototype created above called bark.
// Assign bark to be a function() that returns "woof"
// Now, all "Dog" objects will not only have the breed property, but also the "bark" method
