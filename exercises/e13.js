import { data } from "../data/data.js";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  return data.planets.reduce(function(acc, currentValue) {
    return acc += currentValue.avgTemp;
  }, 0) / data.planets.length;
}

console.log(getAveragePlanetsTemperature(data));
console.log(data.planets.length);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
