// (7 kyu) Minimize Sum of Array (Array Series #1)
/* Instructions
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes

    Array/list will contain positives only .
    Array/list will always have even size

Input >> Output Examples

minSum({5,4,2,3}) ==> return (22) 

Explanation:

    The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)

Explanation:

    The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)

Explanation:

    The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou

*/


// Solution
function minSum(arr) {

    // initialize sum to 0
    let sum = 0

    // loop through array and find the min and max values
    for (let i = 0; i < arr.length; i++) {
        let max = Math.max(...arr)
        let min = Math.min(...arr)

        // add the product of the min and max values to the sum
        sum += (max * min)
        // remove the min and max from the array
        arr.splice(arr.indexOf(max), 1)
        arr.splice(arr.indexOf(min), 1)
    }

    return sum
}

// Explanation
// The minimum sum found by summing the products of two numbers will be found by always multiplying the maximum number by the minimum number each time
