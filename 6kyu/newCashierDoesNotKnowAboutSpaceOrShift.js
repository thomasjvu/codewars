// (6 kyu) New Cashier Does Not KNow About Space or Shift
/* Instructions
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

*/

// Solution
function getOrder(input) {
  
  let words = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"]
  
  let temp = ''
  
  let result = []
  
  let sortedResult = []
  
  // check if temp contains word
  // if it does, add word to result array, revert temp, continue
  for (let i = 0; i < input.length; i++) {
    
    temp += input[i]
    
    if (words.includes(temp)) {
      result.push(temp[0].toUpperCase() + temp.slice(1))
      temp = ''
    }
    
  }
  
  let length = result.length
  
  // put result in same order as menu items
  
  for (let i = 0; i < length; i++) {
    if (result.includes("Burger")) {
      sortedResult.push("Burger")
      result.splice(result.indexOf("Burger"), 1)
    }
    else if (result.includes("Fries")) {
      sortedResult.push("Fries")
      result.splice(result.indexOf("Fries"), 1)
    }
    else if (result.includes("Chicken")) {
      sortedResult.push("Chicken")
      result.splice(result.indexOf("Chicken"), 1)
    }
    else if (result.includes("Pizza")) {
      sortedResult.push("Pizza")
      result.splice(result.indexOf("Pizza"), 1)
    }
    else if (result.includes("Sandwich")) {
      sortedResult.push("Sandwich")
      result.splice(result.indexOf("Sandwich"), 1)
    }
    else if (result.includes("Onionrings")) {
      sortedResult.push("Onionrings")
      result.splice(result.indexOf("Onionrings"), 1)
    }
    else if (result.includes("Milkshake")) {
      sortedResult.push("Milkshake")
      result.splice(result.indexOf("Milkshake"), 1)
    }
    else if (result.includes("Coke")) {
      sortedResult.push("Coke")
      result.splice(result.indexOf("Coke"), 1)
    }
  }

  return sortedResult.join(' ')

}
