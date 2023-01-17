import { data } from "../data/data.js";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

//more testing purposes only
// export function findPlanetNameByMoon(data, moonName) {
//   // Your code goes here...
//   let array = [];
//   let planet = data.planets
//   .filter(function(planetStats) {
//       return planetStats.moonsCount >= 1
//   })
//   .map(function(planetStats, i, arr) {
//     arr[i].moons
//     .map(function(ignore, i2, arr2) {
//       if (arr2[i2] === moonName) {
//         array.push(planetStats.name);
//       }
//     });
//   })
//   return array;
// }


export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let planet;
  data.planets
  .filter(function(planetStats) {
      return planetStats.moonsCount >= 1;
  })
  .map(function(planetStats, i, arr) {
    if (arr[i].moons.indexOf(moonName) >= 0) {
      planet = planetStats.name;
    }
  });
  return planet;
}

//testing purposes only
console.log(findPlanetNameByMoon(data, "Harpalyké"));
console.log(findPlanetNameByMoon(data, "Cressida"));
console.log(findPlanetNameByMoon(data, "Despina"));
console.log(findPlanetNameByMoon(data, "Triton"));

// console.log(data.planets[0].moons[1] === "Umbriel");
// console.log(data.planets[1].moons)


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
