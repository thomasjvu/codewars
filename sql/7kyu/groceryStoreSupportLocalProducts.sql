/* (7 kyu) GROCERY STORE: Support Local Products
/*
You are the owner of the Grocery Store. All your products are in the database, that you have created after CodeWars SQL excercises!:)

You care about local market, and want to check how many products come from United States of America or Canada.

Please use SELECT statement and IN to filter out other origins.

In the results show how many products are from United States of America and Canada respectively.

Order by number of products, descending.
products table schema

    id
    name
    price
    stock
    producer
    country

results table schema

    products
    country
*/

/* Solution */
SELECT COUNT(*) as products, country
FROM products
WHERE country IN ('United States of America', 'Canada')
GROUP BY country
ORDER BY products DESC

/* Explanation */
/* SELECT COUNT(*) counts every entry in the table and creates a new column products, our second column is country
 * We want to get this information FROM the products table
 * We want to only obtain data WHERE the country is IN the United States of America or Canada
 * We want to group these values (our products) by COUNTRY
 * Then we want to order the values (products) in DESCENDING order
*/
