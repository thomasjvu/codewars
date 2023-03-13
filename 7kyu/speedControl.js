// (7 kyu) Speed Control
/* Instructions
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]

The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25

We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]

Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
Example:

With the above data your function gps(s, x) should return 74
Note

With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.

Happy coding!

*/

// Solution
const gps = (s, x) => {

    // account for edge case (car not moving)
    if (x.length <= 1) return 0

    // create an empty speeds array
    let speeds = []

    // iterate through the given array, and push the average speed of each section into the speeds array
    for (let i = 0; i < x.length - 1; i++) {
        speeds.push(3600 * (x[i + 1] - x[i]) / s)
    }

    // Use the spread operator with the Math.max() method to get the maximum value in the array, and then return the floor of that value
    return Math.floor(Math.max(...speeds))

}
