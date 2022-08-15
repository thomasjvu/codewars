// (8 kyu) A Needle in the Haystack
/* Instructions
Note: In COBOL, it should return "found the needle at position 6"

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

Note: In COBOL, it should return "found the needle at position 6" 
*/

// Solution
 function findNeedle(Haystack) {
     let needleIndex = haystack.indexOf('needle')
     return `found the needle at position ${needleIndex}`
 }

// Explanation
// Use the `.indexOf()` array method to find the index of an item in the array
// Then, return it in a template literal.
