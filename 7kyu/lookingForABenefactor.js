// (7 kyu) Looking for a Benefactor
/* Instructions
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

Should the last donation be a non positive number (<= 0) John wants us:

    to return:
        Nothing in Haskell, Elm
        None in F#, Ocaml, Rust, Scala
        -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang

    or to throw an error (some examples for such a case):
        IllegalArgumentException() in Clojure, Java
        ArgumentException() in C#
        echo ERROR in Shell
        argument-error in Racket
        std::invalid_argument in C++
        ValueError in Python

So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.
Notes:

    all donations and navg are numbers (integers or floats), arr can be empty.
    See examples below and "Sample Tests" to see which return is to be done.

new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
or return `-1` or ERROR or Nothing or None depending on the language.

*/

// Solution
function newAvg(arr, newavg) {

    // create a variable that is the length of the given donations array
    let n = arr.length
    // add all of the values in the array to get the current value
    let currentVal = arr.reduce((a, b) => a + b, 0)
    // to find the next value, multiply the wanted new average, multiply it by n + 1, and subtract that by the current value 
    let next = newavg * (n + 1) - currentVal

    // if that next donation is less than or equal to 0, throw an error
    if (next <= 0) {
        throw new Error('Expected New Average is too low')
    }

    // Otherwise, return the next donation amount rounded up to the nearest whole number
    return Math.ceil(next)

}
