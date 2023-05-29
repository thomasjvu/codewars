// (7 kyu) Flatten
/* Instructions
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

// Solution (with .flat() method)
// const flatten = (array) => array.flat(1)

// Explanation
// The .flat() method creates a new array with all subarray elements concatenated into it recursively up to the specified depth, which in this case is 1 level


// Solution (without .flat() method)
const flatten = (array) => {
    let flatArray = []

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                flatArray.push(array[i][j])
            }
        } else {
            flatArray.push(array[i])
        }
    }

    return flatArray
}
