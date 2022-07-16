/* (7 kyu) SQL Basics: Raise to the Power
Given the following table 'decimals':

decimals table schema
id
number1
number2
Return a table with a single column result which is the output of number1 raised to the power of number2.

*/

/* Solution */
SELECT POWER(number1, number2) AS result
FROm decimals

/* Explanation */
/* Use the POWER(a, b) function to get A to the power of B, and return that as a single column named result
