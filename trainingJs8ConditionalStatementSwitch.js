// (8 kyu) Training JS #8: Conditional statement--switch
/* Instructions
 
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

Tip: Using default for most of the cases can reduce your work.
*/

// Solution
function howManydays(month){
  switch (month){
      case 2:
        return 28
        break
      case 4:
        return 30
        break
      case 6:
        return 30
        break
      case 9:
        return 30
        break
      case 11:
        return 30
        break
      default:
        return 31
        break
  }
}

// Explanation
// Use default to return 31 as it has the most cases
// For case 2 (month 2) return 28
// For cases 4,6,9, and 11, return 30
// Make sure to add break after each return
