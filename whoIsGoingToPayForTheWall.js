// (8 kyu) Who is going to pay for the wall?
/* Instructions
 * Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
*/

// Solution
function whoIsPaying(name) {
    if (name.length > 2) {
        return [name, name[0] + name[1]]
    } else {
        return [name]
    }
}

// Refactored
const whoIsPaying = name => (name.length > 2) ? [name, name[0] + name[1]] : [name]

// Explanation
// Check if the length of the name parameter is greater than 2, if it is, return the name and the 0th index and 1st index as an array of 2 elements
// If not, return the name as a single element array
