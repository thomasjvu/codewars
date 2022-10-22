/* (8 kyu) SQL Basics: Simple Distinct */
/* Instructions: */
/* For this challenge you need to create a simple DISTINCT statement, you want to find all the unique ages. */
/* people table schema */

/*     id */
/*     name */
/*     age */

/* select table schema */

/*     age (distinct) */

/*     NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing. */


/* Solution */

SELECT DISTINCT age
FROM people

/* Explanation */
/* We can use the SELECT DISTINCT keyword to grab the distinct (age) values from a table. */
/* We can use the FROM keyword to choose the table we want to select our values from. */
