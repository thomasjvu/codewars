// (7 kyu) SevenAte9
/* Instructions
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/

// Solution
function sevenAte9(str) {
    // instantiate array from given string
    let arr = Array.from(str)

    // loop through array, starting at the second element
    for (let i = 1; i < arr.length - 1; i++) {
        // if element is 9 and between two sevens, remove that element and subtract 1 from iterator
        if (arr[i] === '9' && arr[i-1] === '7' && arr[i+1] === '7') {
            arr.splice(i, 1)
            i--
        }
    }

    // return array joined as string
    return arr.join('')
}
