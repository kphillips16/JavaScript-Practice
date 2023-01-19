import { data } from "../data/data.js";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  return data.planets.reduce(function(acc, currentValue) {
    if (currentValue.moonsCount < 10) {
      acc.push(currentValue.name);
      return acc;
    }
    return acc;
  }, []);
}

console.log(lowMoonsPlanets(data));
console.log(data.planets[0].moons.length);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
