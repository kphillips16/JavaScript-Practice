import { data } from "../data/data.js";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  var names = data.planets
  .filter(function(planetStats) {
    //note to self, this and the below return value are the same
    // if (planetStats.mass.massValue >= number) {
    //   return planetStats;
    // }
    return planetStats.mass.massValue >= number;
  })
  .map(function(planet) {
    return planet.name;
  });
  return names;
}

//for testing purposes only
for (var i = 0; i < 7; i ++){
  console.log(getPlanetsWithMassValue(data, i));
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
