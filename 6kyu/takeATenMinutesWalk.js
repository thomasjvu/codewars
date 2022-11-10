// (6 kyu) Take a Ten Minutes Walk
/* Instructions
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

// Solution
function isValidWalk(walk) {
    let countN = 0
    let countS = 0
    let countE = 0
    let countW = 0
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === "n") {
            countN += 1
        } else if (walk[i] === "s") {
            countS += 1
        } else if (walk[i] === "e") {
            countE += 1
        } else if (walk[i] === "w") {
            countW += 1
        }
    }
    if (countN === countS && countW === countE && walk.length === 10) {
        return true
    } else {
        return false
}

// Explanation
// Loop through each of the array elements in the walk array
// add 1 to a new variable for each direction that the walk array element corresponds to
// if North & South have the same count, and East and West have the same count, we'll end up in the original destination
// We must also check if the length of the walk is 10 elements, which will equate to 10 minutes
// if all of those conditions are true, return true, otherwise return false
