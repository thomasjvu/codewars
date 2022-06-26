/* (8 kyu) Easy SQL: Convert to Hexadecimal */
/* Instructions

to hexYou have access to a table of monsters as follows:

monsters table schema
id
name
legs
arms
characteristics
Your task is to turn the numeric columns (arms, legs) into equivalent hexadecimal values.

output table schema
legs
arms

*/

/* Solution */
SELECT
    TO_HEX(legs) AS legs,
    TO_HEX(arms) AS arms
FROM monsters

/* Explanation */
/* We can use TO_HEX function in SQL to convert a sequence into a hexadecimal string.
