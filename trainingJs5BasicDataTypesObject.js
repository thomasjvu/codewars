// (8 kyu) Training JS #5: Basic data types--Object
/* Instructions
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}

you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")

Task

Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}

and return a string like this:

"This white dog has 4 legs."

*/

// Solution
function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

// Explanation
// You can access an object's properties using .dot notation
// Use the ${} bling syntax within template literals (backticks) `` to evaluate expressions within text.
