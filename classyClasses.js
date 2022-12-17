// (8 kyu) Classy Classes
/* Instructions
 * Classy Classes

Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task

Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

// Solution 1
class Person {
    constructor(name, age) {
        this.info = `${name}s age is ${age}`;
    }
}

// Solution 2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return `${this.name}s age is ${this.age}`
    }
}

// Explanation
// Add the name and age parameters to the constructor
// Create a method called info that uses the `this` keyword to target the parameters given in the object
// Make the info method return the interpolated string that uses the name and age variables (bling syntax)
