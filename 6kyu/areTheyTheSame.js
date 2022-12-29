// (6 kyu) Are they the "same"?
/* Instructions
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarks

    a or b might be [] or {} (all languages except R, Shell).
    a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
Note for C

The two arrays have the same size (> 0) given as parameter in function comp.

*/

// Solution
function comp(array1, array2) {

  if(array1 === null || array2 === null) {
    return false;
  }  

  if(!array1.length || !array2.length) {
    return true;
  }
  for(let i = 0; i < array2.length; i++) {
    if(array2[i] === Math.pow(array1[0],2)) {
      array1.shift();
      array2.splice(i, 1);
      return comp(array1, array2);
    }
  }
  return false;  
}

// Explanation
// Check edgecase if array1 or array2 is null, return false
// Check edgecase if array1 or array2 is empty, return true
// Use a for loop to iterate each element in either of the arrays
// If the element in array2 at the current index is equal to the first element in array1 squared, then...
// Remove the first element from array 1
// Remove the current element from array 2
// Recursively call the function with t he modified array
// Otherwise, return false if no elements in array2 match the first element in array1 squared

