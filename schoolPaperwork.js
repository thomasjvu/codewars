// (8 kyu) Beginner Series #1 School Paperwork
/* Instructions
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

Waiting for translations and Feedback! Thanks!
*/

// Solution
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n * m
  }
}

// Explanation
// We have n classmates and m pages
// So, we should multiply the two given arguments together to get the amount pages we need
// However, if there is any  negative number involved, we immediately return 0
// This could be done with a simple if..else conditional statement
