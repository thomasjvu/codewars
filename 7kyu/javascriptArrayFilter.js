// (7 kyu) JavaScript Array Filter
/* Instructions
 * JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

    The solution would work like the following:

    getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

// Solution
function getEvenNumbers(numbersArray){
    return numbersArray.filter(element => element % 2 === 0)
}

// Refactored
const getEvenNumbers = numbersArray => numbersArray.filter(element => element % 2 === 0)

// Explanation
// Use the array `.filter()` method with the modulus callback function element => element % 2  === 0) that will return a new array that fits the filter condition.
