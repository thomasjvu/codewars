// (7 kyu) Disemvowel Trolls

/* Instructions:
 *
 * Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/


// Solution (regex)
function disembowel(str) {
    return str.replace(/[aeiou]/ig, '')
}


/* Explanation
 * Essentially, we want to replace every instance of a vowel with an empty character.
 * We can do this easily with regex, /[aeiou]/, and add the case-insensitive and global keys.
 */


// Solution (normal)
function disemvowel(str) {
    return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')
}

/* Explanation
 * We want to split the string into an array of letters
 * Then, we use the `.filter()` method to return a new array that includes only letters that does not include our vowels. 
 * We account for case-sensitive with the `.toLowerCase()` method, so that each letter being looped is caseinsensitive.
 * Then we join the remaining letters in the array into a single string.



