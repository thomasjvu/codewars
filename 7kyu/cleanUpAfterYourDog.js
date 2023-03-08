// (7 kyu) Clean up after your dog
/* Instructions
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'

*/

// Solution
function crap(x, bags, cap) {
    let poop = 0
    x = x.flat()

    for (let i = 0; i < x.length; i++) {

    }
}

// Explanation
// Instantiate a variable, poop, which will count the amount of @ in the x array
// Flatten the 2d x array using the .flat() method
// Loop through each element in the flattened array x
// In each iteration, check if the element is equal to 'D' and if it is, return 'Dog!!'
// If the element is not equal to 'D', check if it is equal to '@', and if so, increment the poop counter
// Return a ternary that returns either 'Clean' or 'Cr@p', depending on if the bags * capacity values are greater than or equal to the count of poop
