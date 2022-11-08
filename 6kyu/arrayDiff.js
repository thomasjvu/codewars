// Instructions
/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

// Solution
function arrayDiff(a, b) {
    let unique = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            unique.push(a[i]);
        }
    }
    return unique;
}

// Explanation
// We have two arrays as our arguments, and we want to check if the elements in array 'b' are present in array 'a', and remove all instances of them in array 'a' if there are any.
// First, instantiate a new array to hold all the unique values
// Then, loop through each element of A. 
// If the value of indexOf is -1, that means the value is not present
// So, if the index of each element in array a is -1, that means it is not present in array b and thus can be pushed into the new array.
// Finally, return the new array (unique)
