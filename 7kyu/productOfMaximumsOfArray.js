// (7 kyu) Product of Maximums Of Array (Array Series #2)
/* Instructions
 *
*/

// Solution
const maxProduct = (numbers, size) => {
    let product = 1
    numbers.sort((a, b) => b - a)
    for (let i = 0; i < size; i++) {
        product *= numbers[i]
    }
    return product
}

// Explanation
// Instantiate a new number variable, product, and set it equal to 1.
// Use the .sort() array method to sort the numbers array in place.
// Loop through numbers 0 to the given size
// For each iteration, multiply the current product by the value of he element at the current index of the numbers array
// Finally, return the product
