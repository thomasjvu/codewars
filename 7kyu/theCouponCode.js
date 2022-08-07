// (7 kyu) The Coupon Code
/* Instructions
 * Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

*/

// Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return (enteredCode === correctCode && new Date (currentDate) <= new Date (expirationDate))
}

// Refactored
let checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => 
    (enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate))

// Explanation
// To compare dates, we must create a Date object using the `new Date()` syntax.
// This will allow us to compare dates as we imagine.
// We also need to check if the entered code is correct, and if both conditions are true, then return true otherwise false
