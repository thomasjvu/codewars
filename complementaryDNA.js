// (7 kyu) Complementary DNA
// Instructions
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"



// Solution

function DNAStrang(dna){
    let dnaComplement = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            dnaComplement += 'T'
        } else if (dna[i] === 'T') {
            dnaComplement += 'A'
        } else if (dna[i] === 'C') {
            dnaComplement += 'G'
        } else if (dna[i] === 'G') {
            dnaComplement += 'C'
        }
    } return dnaComplement
}

// Explanation
// This method uses a for loop to iterate through each element of the initial string given and determine whether or not it has a certain value, and if it does, we add the complementary to the new string instead.
