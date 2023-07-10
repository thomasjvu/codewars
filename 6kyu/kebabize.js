// (6 kyu) Kebabize
/* Instructions
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

Notes:

    the returned string should only contain lowercase letters
*/

// Solution
function kebabize(str) {
    // remove all numbers and split the string into an array
    let arr = str.replace(/[0-9]/g, "").split('')
    // loop through the array and insert a hyphen wherever theres an uppercase AFTER the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr.splice(i, 0, "-");
            i++;
        }
    }
    // return the array joined together and all lowercase
    return arr.join("").toLowerCase();
}
