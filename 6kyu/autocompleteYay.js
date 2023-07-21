// (6 kyu) Autocomplete! Yay!
/* Instructions
It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

Important note:

Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".

(Thanks to wthit56 for the suggestion!)
*/

// Solution
function autocomplete(input, dictionary) {
    // define regex that will check globally and case-insensitively for any character that is not a letter
    let regex = /[^a-z]/gi;

    // reassign the input to be the input with every non-letter character replaced by an empty char
    input = input.replace(regex, "");

    // init var to hold result of valid autocompletes
    let result = [];

    // loop through given dictionary argument, and if the current iteration starts with the input, push it to the result array
    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i].toLowerCase().startsWith(input)) {
            result.push(dictionary[i]);
        }
    }

    // return the first 5 elements of the result array using the slice method
    return result.slice(0, 5);
}
