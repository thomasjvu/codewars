// (7 kyu) Number of Occurrences
/* Instructions
Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).
Examples

var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;

*/

// Solution
Object.defineProperty(Array.prototype, "numberOfOccurrences", {
    value: function numberOfOccurrences(element) {
        // init count variable
        let count = 0;

        // use the `this` keyword to target the prototypal object and loop through the array
        // if the current element in the array is equal to the given element argument, increment the count
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) count++;
        }

        // return the count after all iterations
        return count;
    },
});
