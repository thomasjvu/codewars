// (8 kyu) Remove the time
/* Instructions
 * You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".
*/

// Solution
function shortenToDate(longDate) {
    return longDate.split(',')[0]
}

// Refactored
const shortenToDate = longDate => longDate.split(',')[0]

// Explanation
// The time is separated from the rest of the date by a comma, so we can use the `.split(',')` method to separate the date into two elements with the comma as the separation point
// Then, take the first element of the newly split array using index[0], which will be the date excluding the time
