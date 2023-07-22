// (8 kyu) Finish Guess the Number Game
/* Instructions
Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

    If the user tries to guess more than the limit, the function should throw an error.
    If the user guess is right it should return true.
    If the user guess is wrong it should return false and lose a life.

Can you finish the game so all the rules are met?
*/

// Solution
class Guesser {
    constructor(number, lives) {
        this.number = number
        this.lives = lives
    }

    guess(n) {
        // first, check for no lives left, and if so, throw error
        if (this.lives === 0) {
            throw new Error
        }
        // otherwise, check if guess is correct and return true if so
        else if (n === this.number) {
            return true
        // otherwise if guess is incorrect, decrement a life
        } else {
            this.lives--
        }
        // if error is not returned or guess is not true, return false
        return false
    }
}
