// (7 kyu) The Office I - Outed
/* Instructions
 * Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

// Solution

let score = 0
let people = 0

for (key in meet) {
    if (key === boss) {
        score += meet[key] * 2
    } else {
        score += meet[key]
    }
    people++
}

let average = score / people

return (average <= 5) ? 'Get Out Now!' : 'Nice Work Champ!'

// Explanation
// Initialize a variable, score, set equal to 0
// Initialize a variable, people, set equal to 0
// Loop through the meet object using a for..in loop
// For each key (person) in the meet object, add their value to the score
// If the person in the meet object is the boss, add their value * 2 to the score
// For each iteration, add 1 to the people count
// Initialize a variable, average, which is equal to score / people
// Use a ternary and return either 'Get Out Now!' or 'Nice Work Champ!' depending on the average value
