import { data } from "../data/data.js";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  return data.planets.reduce(function (acc, currentValue) {
    if (currentValue.moonsCount !== undefined) {
      return acc += currentValue.moonsCount;
    }
    return acc;
  }, 0);
}

console.log(allPlanetsMoonsCount(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
