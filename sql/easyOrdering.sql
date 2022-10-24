/* (8 kyu) Easy SQL - Ordering */

/*
Your task is to sort the information in the provided table 'companies' by number of employees (high to low). 
Returned table should be in the same format as provided:

companies table schema

    id
    ceo
    motto
    employees

Solution should use pure SQL. Ruby is only used in test cases.
*/


/* Solution */
SELECT *
FROM companies
ORDER BY employees DESC

/* Explanation */

/*
- Select every column from table in the same format using the `*`
- Select the table we want by using the `FROM`
- Sort the table by employees by using the `ORDER BY` keyword paired with `DESC` to go from high to low
*/
