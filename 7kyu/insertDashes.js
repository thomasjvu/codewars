// (7 kyu) Insert Dashes
/* Instructions
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

// Solution
const insertDash = (num) => {
    // create an array from the given number by converting to string then splitting
    let arr = String(num).split("");

    // loop and check for conseuctive numbers, using the unary + operator to turn the strings into numbers
    for (let i = arr.length - 2; i >= 0; i--) {
        if (+arr[i] % 2 !== 0 && +arr[i + 1] % 2 !== 0) {
            // use splice to add elements and remove 0 starting at position i+1
            arr.splice(i + 1, 0, "-");
        }
    }

    // return array joined together as string
    return arr.join("");
};
