// (7 kyu) How many consecutive numbers are needed?
/* Instructions
Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.
Example

[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0

*/

// Solution
function consecutive(array) {
    // sort array in ascending order
    array = array.sort((a, b) => a - b);

    // init var for count of needed numbers to make consecutive
    let count = 0;

    for (let i = 0; i < array.length - 1; i++) {
        // check if next item is consecutive to current item
        while (array[i + 1] !== array[i] + 1) {
            // if true, add the current array item and increment the count
            array.splice(i + 1, 0, array[i] + 1);
            count++;
        }
    }

    // return final count
    return count;
}
