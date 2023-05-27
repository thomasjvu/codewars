// (7 kyu) Highest and Lowest
/* Instructions
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.


*/

// Solution
export class Kata {
    static highAndLow(numbers: string): string {
        const highLow: number[] = numbers.split(' ').map(num => Number(num)).sort((a, b) => a - b)

        const highLowString: string = `${highLow[highLow.length - 1]} ${highLow[0]}`

        return highLowString
    }
}

// define highLow as an array of numbers, retrieved by splitting the numbers string into an array, mapping each element to its number equivalent, then sorting it in ascending order
// define highLowString as a string, which uses string interpolation to get highest and lowest array values return as a string
// return highLowString, which is the string that the function highAndLow expects
