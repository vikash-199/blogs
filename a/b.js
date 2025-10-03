// Function to calculate mileage for multiple trips
function calculateAverageMileage(trips) {
  let totalDistance = 0;
  let totalFuel = 0;

  trips.forEach((trip) => {
    totalDistance += trip.distance;
    totalFuel += trip.fuel;
  });

  if (totalFuel <= 0) {
    return "Fuel must be greater than 0!";
  }

  return totalDistance / totalFuel;
}

// Example usage with multiple trips
let trips = [
  { distance: 120, fuel: 8 }, // 120km with 8L
  { distance: 200, fuel: 12 }, // 200km with 12L
  { distance: 150, fuel: 10 }, // 150km with 10L
];

let avgMileage = calculateAverageMileage(trips);
console.log("Average Mileage = " + avgMileage.toFixed(2) + " km/l");
