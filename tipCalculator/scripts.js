/**
 * Tip Calculator
 */


/***
 * 3 different restaurants
 bills $124 .00 $48 .00 and $268.
 calculator as a
 function
tip 20% if bill is < 50
tip 15% bill is 50 <= 200
tip 10% bill is > 200
john wants two arrays
1.containing all three tips(one for each bill)
2.containing final paid amount
 */

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.20;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.10;
  }
  return (percentage * bill);
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];



var finalBill =  [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];
                  
console.log(finalBill);



