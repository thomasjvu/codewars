// (8 kyu) Duck Duck Goose
/* Instructions
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
*/

// Solution
function duckDuckGoose(players, goose) {
    let index = goose - 1
    return players[index % players.length].name
}

// Explanation
// Let the index be goose - 1 because goose is given as a 1-based index
// The players.length property accounts for going in a circle
// Use dot notation to access the value of the name property of the chosen player object
