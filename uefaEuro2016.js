// (8 kyu) UEFA EURO 2016
/* Instructions
 * 

Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

Strings
Arrays
Fundamentals
Ad
Ship your code to production in just a few clicks. Get $200 free credit.
Ads via Carbon
powered by
Solution
1

function uefaEuro2016(teams, scores){

2

  if (scores[0] > scores[1]) {

3

    result = `${teams[0]} won!`

4

  } else if (scores[1] > scores[0]) {

5

    result = `${teams[1]} won!`

6

  } else {

7

    result = `teams played draw.`

8

  }

9

  return `At match ${teams[0]} - ${teams[1]}, ${result}`

10

}
*/

// Solution
function uefaEuro2016(teams, scores){
  if (scores[0] > scores[1]) {
    result = `${teams[0]} won!`
  } else if (scores[1] > scores[0]) {
    result = `${teams[1]} won!`
  } else {
    result = `teams played draw.`
  }
  return `At match ${teams[0]} - ${teams[1]}, ${result}`
}

// Explanation
// Use template literals with the ${} bling operator to do easy string interpolation
// Remember that indexes are 0-based for arrays, so check if index 0 is greater than index 1 or vice-versa to determine who won
