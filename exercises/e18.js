import { data } from "../data/data.js";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let stored = [];
  let highestCount = 0;
  let highestYear = 0;

  data.asteroids.map(function(asteroidStats) {
    let year = stored.find(function(element) {
      return element.year === asteroidStats.discoveryYear;
    });
    if (year === undefined) {
      stored.push({
        year: asteroidStats.discoveryYear,
        count: 1,
      });
    } else {
      stored.find(function(element) {
        if (year.year === element.year) {
          element.count++;
        }
      });
    }
  });

  stored.map(function(element) {
    if (element.count > highestCount) {
      highestCount = element.count;
      highestYear = element.year;
    }
  })
  return highestYear;
}

console.log(getGreatestDiscoveryYear(data));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
