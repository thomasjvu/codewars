// (7 kyu) Printer Errors
/* Instructions
 * In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/


// Solution

function printererror(s) {
    let count = 0
    let incorrect = 0

    for (let i = 0; i < s.length; i++) {
        if ( s[i] != 'a' && s[i] != 'b' && s[i] != 'c' && s[i] != 'd' && s[i] != 'e' && s[i] != 'f' && 
         s[i] != 'g' && s[i] != 'h' && s[i] != 'i' && s[i] != 'j' && s[i] != 'k' && s[i] != 'l' && s[i] != 'm' ) {
          incorrect++ 
        }    
        count++
    }
return `${incorrect}/${count}`
}

// Explanation
// Initialize a new variable, count, and assign it a value of 0
// Initialize a new variable, incorrect count, and assign it a value of 0
// loop through each character in the given string, s, argument, and add 1 to the count for each iteration
// then, for each iteration, if the current character is not either of any letters a through m, add 1 to the incorrect count
// finally, return a template literal that displays the incorrect count / total count as a string.

