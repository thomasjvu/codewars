// (6 kyu) Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
/* Instructions
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
Examples

"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

// Solution
function balance(left, right) {
    // initializez left and right values
    let leftVal = 0;
    let rightVal = 0;

    // loop through each array and calculate values; +2 for ! and +3 for ?
    for (let i = 0; i < left.length; i++) {
        if (left[i] === "!") leftVal += 2;
        else if (left[i] === "?") leftVal += 3;
    }

    for (let j = 0; j < right.length; j++) {
        if (right[j] === "!") rightVal += 2;
        else if (right[j] === "?") rightVal += 3;
    }

    // return "Left", "Right", or "Balance" depending on the value comparison
    if (leftVal > rightVal) return "Left";
    else if (rightVal > leftVal) return "Right";
    else return "Balance";
}
