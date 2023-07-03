// (6 kyu) Title Case
/* Instructions
Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
Arguments (Haskell)

    First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
    Second argument: the original string to be converted.

Arguments (Other languages)

    First argument (required): the original string to be converted.
    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

// Solution
function titleCase(title, minorWords) {

    // Account for empty title string
    if (title.length === 0) return ''

    // Split minor words string into an array of words
    let minorWordsArray = []

    if (minorWords) {
        // turn each word into lowercase version
        minorWordsArray = minorWords.toLowerCase().split(' ')
    }

    // Split title into an array of words
    title = title.split(' ')

    // Capitalize first letter and lowercase the rest
    title[0] = title[0][0].toUpperCase() + title[0].slice(1).toLowerCase()

    // Loop through title array and either capitalize first letter and lowercase rest, or lowercase all if minor word
    for (let i = 1; i < title.length; i++) {
        if (!minorWordsArray.includes(title[i].toLowerCase())) {
            title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase()
        } else {
            title[i] = title[i].toLowerCase()
        }
    }

    title = title.join(' ')

    return title
}
