// (6 kyu) Persistent Bugger
/* Instructions
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

// Solution
function persistence(num) {

    // instantiate count of multiplicative persistence
    let persistence = 0

    // multiply digits in num until single digit is reached (until num is not greater than 9)
    while (num > 9) {
        // reassign num to its next persistence by using the spread operator to iterate each digit into an array
        // then use the reduce function to multiply each digit together, starting with 1 because 1 * anything is itself
        // The reduce function uses implicit type conversion because we are multiplying the numbers together
        num = [...num.toString()].reduce((acc, curr) => acc * curr, 1)
        // every time it happens, add 1 to the persistent count
        persistence++
    }

    // return the persistence count
    return persistence
}
