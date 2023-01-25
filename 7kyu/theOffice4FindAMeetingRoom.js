// (7 kyu) The Office IV - Find a Meeting Room
/* Instructions
 * Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty

If all rooms are busy, return "None available!"
*/


// Solution
function meeting(x) {
    if (x.findIndex(element => element === 'O') === -1) return 'None available!' 
    return x.findIndex(element => element === 'O')
}

// Explanation
// Use the .findIndex method return the first index of an element that satisfies the callback function
// If no element satisfies the callback function, -1 will be returned, so as our first if condition,
// check if the result of finding our index is -1, and if so, return 'None available!'
// Otherwise, we would simply do the regular return.
