// (8 kyu) Even or Odd
/* Instructions
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// Solution
export function even_or_odd(n: number):string {
    return (n % 2 === 0) ? "Even" : "Odd"
}

// Explanation
// Use a ternary to return either Even or Odd depending on if the remainder of n / 2 is 0 (Even for true, Odd for false)
