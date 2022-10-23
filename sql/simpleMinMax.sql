/* (8 kyu) SQL Basics: Simple MIN / MAX
/*
For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.

people table schema
id
name
age
select table schema
age_min (minimum of ages)
age_max (maximum of ages)
*/

/* Solution */

SELECT MIN(age) as age_min, MAX(age) as age_max
FROM people

/* Explanation */
/* We can use the `MIN()` and `MAX()` functions to obtain the minimum and maximum ages from a column, and the 'as' keyword creates a temporary column with our chosen alias(es). */
