/* (7 kyu) SQL Basics: Simple JOIN
For this challenge you need to create a simple SELECT statement that will return all columns from the products table, and join to the companies table so that you can return the company name.

products table schema
id
name
isbn
company_id
price
companies table schema
id
name
You should return all product fields as well as the company name as "company_name".

NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
*/

/* Solution */
SELECT
    products.id,
    products.name,
    products.isbn,
    products.company_id,
    products.price,
    companies.name
    AS company_name
FROM products
JOIN companies
ON products.company_id = companies.id

/* Explanation
 * See that the two tables can join at company_id and companies.id because these will be the same values
 * Select every column from the products table, as well as the name column from the companies table
 * At the intersect of company ID, we join the two tables together
 * Now, the full table will have all of the products, as well as the companies.name column listed now AS company_name
 */
