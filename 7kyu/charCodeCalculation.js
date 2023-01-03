// (7 kyu) Char Code Calculation
/* Instructions
 * Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

*/



// Solution
function calc(x) {
    let total1 = ""
    let total2 = ""
    let sumDig1 = 0
    let sumDig2 = 0

    for (let i = 0; i < x.length; i++) {
        total1 += x.charCodeAt(i)
    }

    for (let i = 0; i < total1.length; i++) {
        if (total1[i] === "7") {
            total2 += "1"
        } else {
            total2 += total1[i]
        }
        sumDig1 += Number(total1[i])
        sumDig2 += Number(total2[i])
    }

    return sumDig1 - sumDig2
}

// Explanation
// Instantiate new variables to hold our 2 different charcode totals and our 2 different summed digit totals
// Loop through each element in the given x string, and use the .charCodeAt() method to concatenate the returned value to total1
// Then, loop through each character (digit) in total1 and if it is "7", replace it with "1" in the total2 string
// Then, add the value at each iteration to a number sum of digits for both total1 and total2
// Finally, return the difference between sumDig1 and sumDig2
