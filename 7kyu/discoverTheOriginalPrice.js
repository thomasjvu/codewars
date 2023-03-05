// (7 kyu) Discover The Original Price
/* Instructions
We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
For example:

Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price
*/

// Solution
const discoverOriginalPrice = (discountedPrice, salePercentage) => +(discountedPrice / ((100 - salePercentage)) * 100).toFixed(2)    


// Explanation
// To get the original price from a discounted price while knowing the sale percentage, use this formula
// (discountPrice / ((100 - salePercentage)) * 100).toFixed(2)
// add + in front of it to make sure a number is returned after .toFixed(2) is invoked.
