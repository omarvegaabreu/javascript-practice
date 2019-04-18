// var john = {
//   firsName: 'John',
//   lastName: 'smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'Teacher',
//   isMarried: false,
//   // you can do a function inside an object
//   calAge: function () {
//     /***
//      * another usage of this keyword
//      * used to return a value to age variable inside 
//      * the object.
//      */
//     this.age = 2018 - this.birthYear;
//   }
// };
// john.calAge();

/**
 * Create a bmi calculator using objects
 */

var mark = {
  name:'Mark Smith',
  mass: 78,     //kg,
  height: 1.69, //meters
    calBmi: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
}

var john = {
  name: 'John Smith',
  mass: 92, //kg,
  height: 1.95, //meters
  calBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}


console.log(john, mark);
// john.calBmi(); instead of calling the function outside you can pass the call to the comparison operator 
// mark.calBmi()

if (john.calBmi() > mark.calBmi()) {
  console.log(john.name + ' has a higher bmi! ');
} else if (mark.bmi > john.bmi) {
  console.log(mark.name + ' has a higher bmi! ');
} else {
  console.log(' They have the same BMI! ');
}

// if (john.bmi > mark.bmi) {
//   console.log(john.name + ' has a higher bmi! ');
// } else if (mark.bmi > john.bmi ) {
//   console.log(mark.name + ' has a higher bmi! ');
// } else {
//   console.log(' They have the same BMI! ');
//};