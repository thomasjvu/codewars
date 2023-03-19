// (7 kyu) Regex Validate PIN Code
/* Instructions
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

// Solution
function validatePIN(pin) {

    // check pin length, and if neither 4 or 6, return false immediately
    if (pin.length !== 4 && pin.length !== 6) return false

    // set pattern equal to regex for retrieving only digits

    // use the test() method to return true or false depending on if the pin matches the regex pattern
    return pattern.test(pin)
}
