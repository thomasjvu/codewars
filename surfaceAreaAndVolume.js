// Instructions
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


// Solution

function getSize(width, height, depth) {
  let surfaceArea = (2 * height * width) + (2 * height * depth) + (2 * depth * width)
  let volume = width * height * depth
  return [surfaceArea, volume]
}

// Explanation
// The formula for surface area is 2HW + 2HD + 2DW
// The formula for volume is W * H * D
// Return an array of [surfaceArea, volume] to satisfy the kata.
