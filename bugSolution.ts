function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 4); // Correct

// Correct way to handle string to number type casting
const result3 = add(5, parseInt("3", 10));  
const result4 = subtract(10, parseInt("4", 10));

console.log(result1, result2, result3, result4); // Output will be 8, 6, 8, 6