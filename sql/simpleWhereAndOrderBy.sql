/* (8 kyu) SQL Basics: Simple WHERE and ORDER BY */
/* Instructions: */ 
/* For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50 */
/* people table schema */

/*     id */
/*     name */
/*     age */

/* You should return all people fields where their age is over 50 and order by the age descending */

/* NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing. */


/* Solution */
SELECT * FROM people
WHERE age > 50
ORDER BY age DESC

/* Explanation */
/* SELECT enables us to select items from a table. */ 
/* The asterisk enables us to select ALL values from that table. */
/* The table we are accessing is named `people`. */
/* We want to select all WHERE the `age > 50` */
/* Then we want to ORDER BY the age in DESC(ENDING) order. */
