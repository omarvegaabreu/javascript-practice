
// Object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'Teacher',
  isMarried: false
};

/**
 * Retrieving data from an object.
 * */
console.log(john); // will show object in window
//Dot notation (most used)
console.log(john.firstName);//will retrieve from object and print out John
console.log(john['lastName']);//just another method of retrieving data
var x = 'birthYear';// passing a key:value to a variable outside an object
console.log(john[x]);

/**
 * Mutating properties inside an object
 */

john.job = 'designer';// will change job from teacher to designer
john['isMarried'] = true;// will !== is married, anothe way of mutating data
console.log(john);//will log john to console with changes.

/**
 * New object syntax
 * 
 * Just a more complicated way of creating object, supposed minor gains in speed..
 * 
 */
var jane = new Object();
jane.name = 'jane';
jane.birthYear = 1969;
jane['lastName'] = 'smith';// just to show it works the same as dot notation
console.log(jane);

