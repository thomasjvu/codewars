// (7 kyu) All Inclusive?
/* Instructions
Input:

    a string strng
    an array of strings arr

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

    a boolean true if all rotations of strng are included in arr
    false otherwise

Examples:

contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

Note:

Though not correct in a mathematical sense

    we will consider that there are no rotations of strng == ""
    and for any array arr: contain_all_rots("", arr) --> true

Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
*/

// Solution
function containAllRots(strng, arr) {
    // edge case for empty string
    if (strng === "") return true;

    // init rotations array with initial string
    let rots = [strng];

    // if more than 1 character in array, create rotation
    if (strng.length >= 2) {
        let first = strng[0];
        let second = strng[1];
        let rest = strng.slice(2);

        let rotation = `${second}${rest}${first}`;

        // if more rotations are possible, continue rotating and adding to array
        while (rotation !== strng) {
            if (!rots.includes(rotation)) {
                rots.push(rotation);
            }

            first = rotation[0];
            second = rotation[1];
            rest = rotation.slice(2);

            rotation = `${second}${rest}${first}`;
        }
    }

    return rots.every((rotation) => arr.includes(rotation));
}
