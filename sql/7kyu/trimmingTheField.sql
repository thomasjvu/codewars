/* (7 kyu) SQL Basics - Trimming the Field
 * Instructions
 You have access to a table of monsters as follows:

monsters schema

id
name
legs
arms
characteristics
The monsters in the provided table have too many characteristics, they really only need one each. Your job is to trim the characteristics down so that each monster only has one. If there is only one already, provide that. If there are multiple, provide only the first one (don't leave any commas in there).

You must return a table with the format as follows:

output schema

id
name
characteristic
Order by id
*/

/* Solution */
SELECT id, name, split_part (characteristics, ',', 1) AS characteristic
FROM monsters
ORDER BY id

/* Explanation */
/* The split_part function enables us to choose a column and split it by a specified delimiter, and return a certain part of that string, which in this case is the 1st value.
