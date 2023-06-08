// (7 kyu) Responsible Drinking
/* Instructions
Welcome to the Codewars Bar!

Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
Examples

"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks

Note:

To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

*/

// Solution
function hydrate(s) {
    let regex = /[0-9]/

    s = s.split('').filter(el => regex.test(el) === true).map(el => Number(el))

    s = s.reduce((acc, curr) => acc + curr, 0)

    return (s === 1) ? `${s} glass of water` : `${s} glasses of water`
}

// Explanation
// Define a regular expression to check if an element contains any of the digits
// Split the string so each character is its own element
// Use the array .filter() method and the regex .test() method to filter out any element that doesn't pass the regex test of being a digit
// Then, use the array .map() method to map each element into its Number equivalent
// Then, reduce the array to the sum of its number using the .reduce() method.
// Finally, return a string that accounts for the glass/es plural depending on if the sum of water is 1 or not.
