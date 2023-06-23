// (7 kyu) Holiday III - Fire on the boat
/* Instructions
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
*/

// Solution
function fireFight(s) {
    const regex = /Fire/g
    return s.replace(regex, '~~')
}

// Explanation
// The string `.replace()` method can accept regex as its first argument.
// Start and end regular expression with "/ /" and make it a global replace by using the "g" tag at the end of the regex.
// Then, for the second argument in the replace method, assert the string value you want to replace with, which in this case is '~~'.
