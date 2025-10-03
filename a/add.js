// Items with their prices stored in a JS object
const cart = {
  apple: 50,
  banana: 20,
  orange: 30,
  mango: 60,
};

// Add all prices
let total = 0;
for (let item in cart) {
  total += cart[item];
}

console.log("Total Price = ₹" + total);
