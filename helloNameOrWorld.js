// (8 kyu) Hello, Name or World!
/* Instructions
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

// Solution
function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`
}

//  Explanation
//  Return a template literal starting with Hello, and then checking if name is a truthy value. If it isn't, we'll return 'Hello World!'
//  If it is a truthy value, then we will take the first element (0th index) and caling the .toUpperCase() method on it, 
//  and then concatenating everything after the 0th index by calling `.slice(1)` as a lowercase using the .toLowerCase() method.
// `.slice(1)` takes everything on and after the 1st index (2nd element)
