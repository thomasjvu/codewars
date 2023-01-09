// (7 kyu) esreveR
/* Instructions
 * Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

// Solution
reverse = function(array) {
    let newArr = []
    let length = array.length
    for (let i = 0; i < length; i++) {
        newArr.push(array.pop())
    }
    return newArr
}

// Explanation
// Instantiate an empty array to hold our reversed list
// Instantiate a variable set equal to the original array's length
// Loop through each element in the original array from index 0 to the length variable
// For each iteration, push the last element of the array to the new array
// Return the new array at the end
