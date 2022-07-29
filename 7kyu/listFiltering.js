// (7 kyu) List Filtering
/* Instructions
 * In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

// Solution

function filter_list(l) {
    return l.filter(element => typeof element === "number")
}


// Explanation
// Anytime we see filter, we should immediately think of the .filter() method
// In this filter, we check if each element in the array has a datatype of "number"
// If it does, we return it in our new, filtered array.
