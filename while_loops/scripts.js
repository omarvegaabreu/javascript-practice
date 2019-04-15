// var answer = prompt("are we there yet? ");

// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?");
// }

// alert("WE MADE IT!!!!!");

/**
 * same  loop using indexOf method
 */

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?!");
}
alert("WE MADE IT!!!!")