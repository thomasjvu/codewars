// (7 kyu) The old switcheroo
/* Instructions
Write a function

vowel2index(str)

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

Your function should be case insensitive to the vowels.
*/

// Solution
function vowel2index(str) {
    // initialize empty string
    let replaced = "";
    // declare vowels
    let vowels = "aeiou";

    // loop through string
    for (let i = 0; i < str.length; i++) {
        // by "position", the question means non 0-based index
        let position = i + 1;
        // if the vowels string includes the current iteration
        if (vowels.includes(str[i].toLowerCase())) {
            // concatenate the position to the replaced string
            replaced += `${position}`;
        } else {
            // otherwise, concatenate the string element to the replaced string
            replaced += str[i];
        }
    }
    // return the replaced string
    return replaced;
}

// Time Complexity: O(n), Linear Time - Looping through each element once
