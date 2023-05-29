// (6 kyu) Lottery Ticket
/* Instructions
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

*/

// Solution
function bingo(ticket, win) {

    let miniWins = 0

    // loop through each array in the ticket
    for (let i = 0; i < ticket.length; i++) {
        // within each array, loop through the first element (string)
        for (let j = 0; j < ticket[i][0].length; j++) {
            // if the character code of this element is equal to the winning number, add 1 to miniwins
            // when a miniwin is added, break out of the loop to ensure only 1 miniwin per ticket
            if (ticket[i][0].charCodeAt(j) === ticket[i][j]) {
                miniWins++
                break;
            }
        }
    }

    // check if miniWins is greater than or equal to the win number, and display Winner! otherwise Loser!
    return (miniWins >= win) ? "Winner!" : "Loser!"
}
