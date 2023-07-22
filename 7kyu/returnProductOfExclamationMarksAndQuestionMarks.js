// (7 kyu) Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
/* Instructions
Description:

Count the number of exclamation marks and question marks, return the product.
Examples

Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20

*/

// Solution
function product(string) {
    // init vars for each mark
    let exclamationMarks = 0;
    let questionMarks = 0;

    // loop through string and increment either exclamationMarks or questionMarks depending on the value of that character
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "!") exclamationMarks++;
        if (string[i] === "?") questionMarks++;
    }

    // return exclamationMarks multiplied by questionMarks
    return exclamationMarks * questionMarks;
}
