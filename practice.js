'use strict';
/**
 * variable mutation and type coercion
 */

/*
var firstName = 'john';
var age = 28;

console.log(firstName + ' ' + age);


//Type coercion

var job, isMarried;
job = 'teacher';
isMarried = false;

alert(firstName + ' is a ' + 'year old ' + job + '. Is he married? ' + isMarried);

variable mutation

age = 'twenty eight';

var lastName = prompt(' what is his last name?');
console.log(firstName + ' ' + lastName);


/**
 * Basic operators
 */

//Math operators

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);



//logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'mar is older than john');

*/

/**
 * operator precedence
 */

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//multiple opeartors
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
*/

// multiple assigments

/*
var x, y;
x = y = (3 + 5) * 4 - 6;

x = (3 + 5) * 4 - 6; 
console.log(x, y);

x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
x++;
console.log(x);

*/

/***************************
 * Coding challenge
 ****************************/

/*
var johnBmi = 78 / (1.69 * 1.69);// wight/heigh^2
var marksBmi = 92 / (1.95 * 1.95); // wight/heigh^2

var bmi = (johnBmi > marksBmi);
console.log(' Is john\'s bmi greater than mark\'s ?' + bmi);
*************************/

// Solution

/*
var massMark = 78; //kg
var heightMark = 1.69; // meters

var massJohn = 92; // kg
var heightJohn = 1.95; // meters

var markBMI = massMark / (heightMark * heightMark);
var johnBMI = massJohn / (heightJohn * heightJohn);

var totalBMI = markBMI > johnBMI
console.log('Is marks BMI hight than john\'s ? ' + totalBMI)
*/

/**
 * If/else statements
 */

/*
var firstName = 'john';
var civilStatus = 'married';

if (civilStatus === 'married') {
  console.log(firstName + ' Is married!');
} else {
  console.log(firstName + ' will hopefully marry soon !');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :');
}



var massMark = 78; //kg
var heightMark = 1.69; // meters

var massJohn = 92; // kg
var heightJohn = 1.95; // meters

var markBMI = massMark / (heightMark * heightMark);
var johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI < johnBMI) {
  console.log(' Mark\'s  BMI is higher than john\'s ' );
} else {
  console.log(' John\'s BMI is higher than Marks\'s ' );
}

*/

/***
 * Boolean logic
 */

/*
var firstName = 'john';
var age = 107;

if (age >= 13 && age < 20) {
  console.log(' is an teenager ');

} else if (age >= 20 && age < 30) {
  console.log(' is a young man! ');
} else { 
  console.log('he is a man ');
}
*/

/***
 * The ternary operator and switch statements
 */

/*
var firstName = ' john ';
var age = 13;

age >= 18 ? console.log(firstName + ' drinks beer. ') :
  console.log(firstName + 'drinks juice. ')

  */

//Switch stament

/*
var job = 'teacher';
job = 'driver';
job = 'designer';
job = 'carpenter';

switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code ');
    break;
  case 'driver':
    console.log(firstName + ' drives uber in Miami. ');
    break;
  case 'designer':
    console.log(firstName + ' does dresses for hollywood stars ');
    break;
  default:
    console.log(firstName + ' he does something else ');
}
*/

/*
var firstName = 'john';
var age = 31;

switch(true) {
  case age < 13: // && age < 20;
    console.log(firstName + ' is a boy. ');
  break;
  case age > 13 && age <= 20:
    console.log(firstName + ' is a teenager. ');
  break;
  case age >= 20 && age <= 30:
    console.log(firstName + ' is a young man. ');
  break;
  default: 
  console.log('john is a man!');
}

*/

/**
 * Truthy and Falsy values and equality operators:
 * Way of testing if a variable is defined.
 */

// falsy values: undefined, null,0 '', NaN

/***
 * Coding challenge
 */

//calculate the score for each team
/*
var john = (89 + 120 + 103) / 3; //ppg average

var mike = (116 + 94 + 123) / 3; // ppg average

var mary = (97 + 134 + 105) / 3; //ppg average
 
if (john > mike) {
	console.log(' john is the winner, with an average of ' + john);
} else if (mike > john) {
	console.log(' Mike is the winner with an average of ' + mike);
} else if (john > mike && john > mary) {
	console.log(' john is the overall winner with an average of ' + john);
} else if (mike > john && mike > mary) {
	console.log(' mike is the overall winner with an average of ' + mike);
} else if (mary > john && mary > mike) {
	console.log(' marry is the winner with a total score of ' + mary);
} else {
	console.log(' Its a tie !!! ');
}

*/

//calculate highest average score

//

/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 103) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(' John\'s score is ' + scoreJohn + , ' Mary\'s score is ' + scoreMary + ' Mike\s score is ' +  scoreMike);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log(' John\'s team wins the game! With ' + scoreJohn + ' point\'s ')
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log(' Mikes\'s team wins the game! With ' + scoreMike + ' point\'s ')
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
   console.log(' Mary\'s team wins the game! With ' + scoreMary + ' point\'s ')
} else {
  console.log(' It\'s a tie!! ');
}
*/

/***
 * Fuctions
 */

 /*
function calculateAge() {
  return 2018 - birthyear;
}
*/
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane)



function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {

  }
  console.log(firstName + ' retires in ' + retirement + ' years. ')
}
yearsUntilRetirement(1990, ' John ')
yearsUntilRetirement(1948, ' Mike ')
yearsUntilRetirement(1990, ' Jane ')