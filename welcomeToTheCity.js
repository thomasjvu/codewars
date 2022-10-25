// (8 kyu) Welcome to the City
/* Instructions
 * Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

/* Explanation
 * The issue here is that we need to concatenate each element in the array of name.
 * We can use the `.join()` method to do this. The rest is creating a new string with template literals using the given paramters in the correct place.
 */
