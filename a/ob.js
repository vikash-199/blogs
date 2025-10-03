const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Convert to array, reverse, then back to object
const reversedOrder = Object.fromEntries(Object.entries(obj).reverse());

console.log(reversedOrder);
