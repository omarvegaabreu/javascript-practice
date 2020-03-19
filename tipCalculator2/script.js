/****
 * Tip Calculator
 * 
 * 5 different restaurants
 * bills 124,48,268,180,42
 * 
 * tip
 * bill < 50 %15 tip
 * bill < 50 && >=200 %10 tip
 * bill >=200 %10 tip
 * 
 * using object and loops
 * 1. Create an objet with an array for the bills value
 * 2. Add method to calculate the tip
 * 3. This method should include a loop to interate over all the
 *    bills and do the tip calculations
 * 4. as an output, create:
 *    4. 1. a new array containing all tips
 *    4. 2. an array containing final paid amount bill + tip
 * ** Start with two empty arrays as properties and the fill them
 *     in the loop
 */
var bills = [];
var tips = [];

//Object with an array for the bills value
var john = {
  //bills 124, 48, 268, 180, 42
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      
      var percentage;
      var bill = this.bills[i];
      //determine percentage based on tipping rules
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      // add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
     }
  }
}
john.calTips();
console.log(john);

var bills = [];
var tips = [];

//Object with an array for the bills value
var john = {
  //bills 124, 48, 268, 180, 42
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {

      var percentage;
      var bill = this.bills[i];
      //determine percentage based on tipping rules
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      // add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}
john.calTips();
console.log(john);

var bills = [];
var tips = [];

//Object with an array for the bills value
var mark = {
  //bills 124, 48, 268, 180, 42
  fullName: 'Mark Johnson',
  bills: [77, 375, 110, 45],
  calTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {

      var percentage;
      var bill = this.bills[i];
      //determine percentage based on tipping rules
      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .10;
      } else {
        percentage = .25;
      }
      // add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}
john.calTips();
mark.calTips();
console.log(john, mark);

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
 
john.average = calcAverage(john.tips);
mark.average = calcAverage(john.tips);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family pays higher tips, with an average of $ ' + john.average);
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $ ' + mark.average);
}


