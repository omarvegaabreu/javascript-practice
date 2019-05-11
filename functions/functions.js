/****
 * Functions
 */


function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
const retirementAge = 65;
console.log(ageJane, ageMike, ageJohn)

// create a new function will will calculate years until retirement
const johnRetires = retirement(ageJohn,retirementAge);
const mikeRetires = retirement(ageMike,retirementAge);
const janeRetires = retirement(ageJane, retirementAge);

