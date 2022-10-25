// (7 kyu) Square Every Digit
// Instructions
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


// Solution

function squareDigits(num){
    let squared = '' // declare a new string variable
    num = num.toString(); // convert num parameter to a string
    for (let i = 0; i < num.length; i++){// loop through each element in string
        squared = squared + num([i] ** 2) // concatenate each squared element onto new string
    }
    return Number(squared) // return the squared string as a number
}

