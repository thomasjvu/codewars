// (8 kyu) Grasshopper - Terminal Game #1
/* Instructions
 * Terminal Game - Create Hero Prototype

In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0

*/

// Solution
// function Hero(name) {
//     this.name = name || 'Hero'
//     this.postion = '00'
//     this.health = 100
//     this.damage = 5
//     this.experience = 0
// }

// ES6 Syntax
class Hero {
    constructor(name) {
        this.name = name || 'Hero'
        this.position = '00'
        this.health = 100
        this.damage = 5
        this.experience = 0
    }
}

// Explanation
// Use an object constructor function that creates a new hero class.
// It should hold a parameter (name) space which can be given as an argument
// Use this. syntax to set the properties of each given value.


