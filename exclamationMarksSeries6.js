// (8 kyu) Exclamation Marks Series #6: Remove n Exclamation Marks in the Setence From Left to Right
/* Instructions

 * Description:

Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

// Solution
function remove(s, n) {
    while (n) {
        s = s.replace('!', '')
        n -= 1
    }
    return s
}

// ES6 Syntax
const remove = (s, n) => {
    while (n) {
        s = s.replace('!', '')
        n -= 1
    }
    return s
}

// Explanation
// Use a while loop to check if n is a truthy value (it becomes falsy at 0)
// While it is truthy, replace an exclamation point with a blank string character
// Subtract 1 from n, which will eventually make it falsy and exit the loop
// After the loop ends, return the modified string s
