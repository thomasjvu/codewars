// (6 kyu) longest_palindrome
/* Instructions
Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.
Example:

"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

// Solution
function longestPalindrome(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let longest = 0

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes with s[i] as the center
        let oddLength = expandAroundCenter(s, i, i)
        // Check for even-length palindromes with s[i] and s[i+1] as the center
        let evenLength = expandAroundCenter(s, i, i+1)

        // Update the longest palindrome length
        longest = Math.max(longest, oddLength, evenLength);
    }

    return longest
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}
