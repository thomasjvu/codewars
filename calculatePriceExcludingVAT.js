// (8 kyu) Calculate Price Excluding VAT
/* Instructions
 * Write a function that calculates the original product price, without VAT.
Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1

*/

// Solution
// return price without vat
function excludingVatPrice(price){
  if (price === null) return -1
  return Number((price - (price/115) * 15).toFixed(2))
}

// Explanation
// Use an if-statement to check the condition of price being equal to null, and if it is, return -1
// Otherwise, return the price subtracted by the price divided by 115 (115%) multiplied by 15.
// Use the .toFixed(2) to keep the number within 2 decimal places
// Wrap all of that in a Number constructor because .toFixed returns a string
// Return that final result
