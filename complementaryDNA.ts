// (7 kyu) Complementary DNA
/* Instructions
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"


*/

// Solution
export class Kata {
    static dnaString(dna: string): string {
        let newStr = ""
        for (let i = 0; i < dna.length; i++) {
            if (dna[i] === 'A') {
                newStr += 'T'
            } else if (dna[i] === 'T') {
                newStr += 'A'
            } else if (dna[i] === 'G') {
                newStr += 'C'
            } else {
                newStr += 'G'
            }
        }
        return newStr
    }
}

// Explanation
// The `export` keyword is used to make the `Kata` class available for use in other modules
// The `class` keyword is used to define the `Kata` class
// The `static` keyword is used to define the `dnaString` method as a static method. This means that the method can be called without creating an instance of the `Kata` class.
// The `dnaString` method takes a string argument called `dna` and returns a new string that is the complementary DNA strand.
// The `for` loop is used to iterate over each character in the `dna` string and replace it with its compementary base. The complementary base is determined using a series of `if-else` statements
// The `newStr` variable is used to store the complementary DNA strand.
