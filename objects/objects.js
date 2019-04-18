
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

john.job = 'designer';


