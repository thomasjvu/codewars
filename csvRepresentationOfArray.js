// (8 kyu) CSV Representation of Array
/* Instructions
 * Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

// Solution
function toCsvText(array) {
    return (array.join('\n') )
}

// Explanation
// Use the .join() method to join each element of the array (which are arrays) together with the string ('\n'), which will return a string that concatenates \n between each now joined element in the array.

