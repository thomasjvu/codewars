// (8 kyu) Define a card suit
/* Instructions
 * You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

// Solution
function defineSuit(card) {
    switch (card[card.length - 1]) {
        case '♣':
            return 'clubs'
            break
        case '♦':
            return 'diamonds'
            break
        case '♥':
            return 'hearts'
            break
        case '♠':
            return 'spades'
            break
    }
}

// Explanation
// Use a switch..case statement with the element at the last index for the card string to be switched
// let each card suit be a case for the switched string element
// return the corresponding string for each case
