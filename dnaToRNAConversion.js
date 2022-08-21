// (8 kyu) DNA to RNA Conversion
/* Instructions
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

// Solution
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
}

// Refactored
const DNAtoRNA = dna => dna.replace(/T/g, 'U')

// Explanation
// Use the sting `.replace()` method and regex to easily solve this problem
// Something to keep in mind is that in the Regex forward slashes, you do not need to use quotation marks
