// (8 kyu) Will you make it?
/* Instructions
 * You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/

// Solution
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump <= mpg * fuelLeft) ? true : false
}

// Explanation
// If the distance to pump is less than or equal to our MPG multiplied by the fuel left, then we will make it, otherwise, we will not make it to the pump.
// This can be expressed using a conditional statement, this one is simplified with the ternary operator.
