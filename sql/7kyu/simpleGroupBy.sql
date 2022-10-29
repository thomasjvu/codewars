/* (7 kyu) SQL Basics: Simple GROUP BY
 * Instructions
For this challenge you need to create a simple GROUP BY statement, you want to group all the people by their age andcount the people who have the same age.

    people table schema
    id
    name
    age
    select table schema
    age [group by]
    people_count (people count)
    NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.

*/

/* Solution */

SELECT age, COUNT(people) as people_count
FROM people
GROUP BY age

/* Explanation */
/* The columns we want in our returned table are `age` and `people_count`
 * We want to get these from the `people` table
 * Then, use the GROUP BY keyword to group by age.


