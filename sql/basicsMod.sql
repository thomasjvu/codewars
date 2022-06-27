/* (8 kyu) SQL Basics: Mod */
/* Instructions:
Given the following table 'decimals':

** decimals table schema **

id
number1
number2
Return a table with one column (mod) which is the output of number1 modulus number2.
*/

/* Solution */
SELECT
    number1 % number2 AS mod
FROM decimals
