// (7 kyu) Jaden Casing Strings
/* Instructions
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Link to Jaden's former Twitter account @officialjaden via archive.org
*/

// Solution
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

interface String {
    toJadenCase(): string
}

// TS Explanation
// The `toJadenCase` method is defined on the `String` prototype using the `interface` keyword. This allows us to add new methods to the `String` class without modifying its original position.
// The `: string` syntax in the function definition is TypeScript syntax that specifies the return type of the function. In this case, it indicates that the function returns a string.
// The use of TypeScript is helpful because it allows us to define a new method on the built-in `String` class. Additionally, the TypeScript interface definition ensures that any `String` object in our codebase can call the `toJadenCase` method without a TS error.
