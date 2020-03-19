/***
 * Conditionals excersie
 * 
 * IF age is negative print an error message
 * 
 * If age is 21 "print happy 21st birday"
 * 
 * If age is odd print "your age is odd!"
 * 
 * If age is a perfect square print "perfect square"
 * 
 * 
 */

var age = Number(prompt("How old are you? "));

if (age < 0) {
  alert("Error loading the page ");
} else if (age === 21) {
  alert("Happy 21st birthday!!");
} else if (age % Math.sqrt(age) === 0  ) {
  alert("Your age is a perfect square!");
} else if (age % 2 !== 0) {
  alert("your age is odd");
} 