/****
 * Conditional statements
 * 
 * 
 * Make a conditional statement
 * 
 * If you are younger than 18 you can not enter the venue
 * 
 * If you are between 18 and 21, you can enter but you cannot drink\
 * 
 * Otherwise you can enter and drink
 */



var age= prompt("How hold are you? ");

if (age < 18) {
  alert("You must be 18 to enter");
} else if (age < 21) {
  alert ("You can enter but, you can not consume alcohol");
} else {
  alert("It's PARTY TIME!!!! ");
}
