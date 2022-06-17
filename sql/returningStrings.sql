/* (8 kyu) Returning Strings */
/* Instructions
Write a select statement that takes name from person table and return "Hello, <name> how are you doing today?" results in a column named greeting

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

/* Solution */
SELECT CONCAT('Hello, ', name, ' how are you doing today?' AS greeting
FROM person

/* Explanation
 * Use the SELECT CONCAT method to concatenate a string with a column value
 * Use the AS keyword to name the new selection as greeting
 * Use the FROM keyword to select what table we want to gather this information from (person)
 */
