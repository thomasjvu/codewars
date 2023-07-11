// (7 kyu) Dictionary from two lists
/* Instructions
There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

Example 1:

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

Example 2:

keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}

*/

// Solution
function createDict(keys, values) {

    // instantiate a dict (map) object
    let map = {}

    for (let i = 0; i < keys.length; i++) {
        // if not enough values, set current key equal to null
        if (values[i] === undefined) {
            map[keys[i]] = null
        // otherwise, create a key in the map set to the current key, with an assigned value of the current iteration of values
        } else {
            map[keys[i]] = values[i]
        }
    }

    // return the filled out dictionary / map / object
    return map
}
