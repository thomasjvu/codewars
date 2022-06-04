// (8 kyu) How good are you really?
/* Instructions
 * There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// Solution
function betterThanAverage(classPoints, yourPoints) {
    classAvg = classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length
    classmates = classPoints.length
    return (yourPoints > classAvg) ? true : false
}

// Refactored
const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((acc, curr) => acc + curr, 0) / classpoints.length < yourPoints

// Explanation
// To get the average of the class, we should get the total of classpoints using the `.reduce()` method and dividing it the total of classmates using the `.length` property.
// Then, check if the average is less than our points. If it is, then true, otherwise false
