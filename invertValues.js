// (8 kyu) Invert Values
/* Instructions
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

// Solution

function invert(array){
    return array.map(element => -element)
}

// Refactored

const invert = array => array.map(element => -element)

// Explanation
// We can return a new array that loops through each element using the `.map()` method and setting each element to instead
// be equal to the reverse of the element as indicated by the `-` operator.
// We can use arrow functions to simplify this with an implicit return statement
