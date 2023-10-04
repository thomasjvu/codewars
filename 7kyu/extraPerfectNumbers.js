// (7 kyu) Extra Perfect Numbers (Special Numbers Series #7)
/* Instructions
Definition

Extra perfect number is the number that first and last bits are set bits.
Task

Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .

    Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples

extraPerfect(3)  ==>  return {1,3}

Explanation:
(1)10 =(1)2

First and last bits as set bits.
(3)10 = (11)2

First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}

Explanation:
(5)10 = (101)2

First and last bits as set bits.
(7)10 = (111)2

First and last bits as set bits.
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou

*/

// Solution
function extraPerfect(n){
  
  let expNums = []

  for (let i = 1; i <= n; i++) {
    
    let binary = i.toString(2)
    
    // deduce expNums by checking if first and last bit is a set bit
    if (binary.startsWith(1) === true && binary.endsWith(1) === true) {
      expNums.push(i)
    }
  }
  
  return expNums
}

// Explanation
// Set Bits are 1s in binary (0 is Clear, 1 is Set)
// Init an empty array to hold the Extra Perfect numbers, then loop through each number from 1 to N and checking if the binary of that number starts and ends with a 1 (set bit).
// If it does, push it to the expNums array. Return that filled out array.
