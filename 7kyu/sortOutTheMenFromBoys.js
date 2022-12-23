// (7 kyu) Sort Out The Men From Boys
/* Instructions
 * Scenario

Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd !alt !alt
Task

Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt !alt
Notes

    Return an array/list where Even numbers come first then odds

    Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

    Array/list size is at least 4 .

    Array/list numbers could be a mixture of positives , negatives .

    Have no fear , It is guaranteed that no Zeroes will exists . !alt

    Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
    Input >> Output Examples:

menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 

Explanation:

Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})

Explanation:

    Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }

    Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})

Explanation:

    Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

    Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .
*/


// Solution

function menFromBoys(arr) {

    let men = []
    let boys = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            men.push(arr[i])
        } else {
            boys.push(arr[i])
        }
    }

    men.sort((a, b) => a - b)
    boys.sort((a, b) => b - a)

    let sorted = men.concat(boys)

    return sorted.filter((element, index, arr) => arr[index] != arr[index+1])

}

// Explanation
// Declare an empty array to hold the men
// Declare an empty array to hold the boys
// Loop through each element in the array using a for..loop
// For each element, check if the remainder of the element divided by 2 is 0, and if it is, push that element to the men array
// If it is not, push that element to the boys array
// Sort the men array by ascending order using .sort((a,b) => a - b)
// Sort the boy array by descending order using .sort((a,b) => b - a)
// Use the array .concat method to concatenate the men and boys into a new array called sorted
// Then, remove duplicates using the .filter method by checking if the element is not equal to the next element in the array
// Return that new filtered and sorted array
