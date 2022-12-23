-- (7 kyu) SQL Basics: Simple JOIN with COUNT
/* Instructions
 * For this challenge you need to create a simple SELECT statement that will return all columns from the people table, and join to the toys table so that you can return the COUNT of the toys
people table schema

    id
    name

toys table schema

    id
    name
    people_id

You should return all people fields as well as the toy count as "toy_count".

    NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
*/



-- SOLUTION
SELECT people.id, people.name, COUNT(*) as toy_count
FROM people people
JOIN toys toys ON people.id = toys.people_id
GROUP BY people.id, people.name

-- EXPLANATION
-- Select the id, name, and count of every row as toy_count from the people table
-- Join the people table and the toys table at the column people_id intersect
-- Group by the people id and the people name
