// (8 kyu) Grader
/* Instructions
Create a function that takes a number as an argument and returns a grade based on that number.
Score 	Grade
Anything greater than 1 or less than 0.6 	"F"
0.9 or greater 	"A"
0.8 or greater 	"B"
0.7 or greater 	"C"
0.6 or greater 	"D"

Examples:
*/

// Solution
const grader = s => {
    switch(true) {
        case (s > 1):
            return 'F'
        case (s >= 0.9):
            return 'A'
        case (s >= 0.8):
            return 'B'
        case (s >= 0.7):
            return 'C'
        case (s >= 0.6):
            return 'D'
        default:
            return 'F'
    }
}

// Explanation
// To solve this using a switch..case statement, use the boolean true for our switch
// Then for each case of the grade, s, being different, return a different result
