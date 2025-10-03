// Mileage formula: distance / fuel
// distance in kilometers, fuel in liters

function calculateMileage(distance, fuel) {
  if (fuel <= 0) {
    return "Fuel must be greater than 0!";
  }
  return distance / fuel;
}

// Example usage:
let distance = 450; // km
let fuel = 25; // liters

let mileage = calculateMileage(distance, fuel);
console.log("Mileage = " + mileage.toFixed(2) + " km/l");
