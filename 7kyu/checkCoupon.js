// (7 kyu) The Coupon Code
// Instructions:
// Story

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false



// Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    currentDate = new Date(currentDate)
    expirationDate = new Date(expirationDate)
    if (enteredCode === correctCode && currentDate <= expirationDate) {
        return true
    } else {
        return false
    }
}

// Refactored
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    currentDate = new Date(currentDate)
    expirationDate = new Date(expirationDate)
    return (enteredCode === correctCode && currentDate <= expirationDate) ? true : false
}

// Explanation
// In order to compare dates in JavaScript, we must turn them into Date objects using the `new Date()` constructor.
// Then, we can do a normal comparison using an if...else statement.
